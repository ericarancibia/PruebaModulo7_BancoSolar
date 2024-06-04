import pool from "../config/db.js";

export const addUserQuery = async (datos) => {
  try {
      const query = {
      text: 'INSERT INTO usuarios (nombre, balance) VALUES ($1, $2) RETURNING *',
      values: datos,
    }
    const response = await pool.query(query)
    if (response.rowCount > 0) {
      return response.rows[0]
    } else {
      return new Error('Error al agregar Usuario')
    }
  }
  catch (error) {
    console.log(error.message)
  }
}

export const getUserQuery = async () => {
    try {
      const query = {
    text: 'SELECT * FROM usuarios'
  }

    const response = await pool.query(query)
    if (response.rowCount > 0) {
      return response.rows
    } else {
      return new Error('Error al obtener Usuario')
    }
  }
  catch (error) {
    console.log(error.message)
  }
}

export const editUserQuery = async (datos) => {
    try {
      const query = {
    text: 'UPDATE usuarios SET nombre = $1, balance = $2 WHERE id = $3',
    values: datos,
  }
    const response = await pool.query(query)
    if (response.rowCount > 0) {
      return response.rows[0]
    } else {
      return new Error('Error editar Usuario')
    }
  }
  catch (error) {
    console.log(error.message)

  }
}

export const deleteUserQuery = async (id) => {
   try {
    const query = {
    text: 'DELETE FROM usuarios WHERE id = $1',
    values: [id]
  }
 
    const response = await pool.query(query)
    if (response.rowCount > 0) {
      return response.rows[0]
    } else {
      return new Error('Error borrar Usuario')
    }
  }
  catch (error) {
    console.log(error.message)

  }

}

export const addTranferQuery = async (datos) => {

  const { emisor, receptor, monto } = datos;
  const { id: emisorId } = (
    await pool.query(`SELECT * FROM usuarios WHERE nombre = '${emisor}'`)
  ).rows[0];

  const { id: receptorId } = (
    await pool.query(`SELECT * FROM usuarios WHERE nombre = '${receptor}'`)
  ).rows[0];
  const registerTranfer = {
    text: "INSERT INTO transferencias (emisor, receptor, monto, fecha) VALUES ($1, $2, $3, NOW()) RETURNING *",
    values: [emisorId, receptorId, monto],
  };
  const updateBalanceEmisor = {
    text: "UPDATE usuarios SET balance = balance - $1 WHERE nombre = $2 RETURNING *",
    values: [monto, emisor],
  };
  const updateBalanceReceptor = {
    text: "UPDATE usuarios SET balance = balance + $1 WHERE nombre = $2 RETURNING *",
    values: [monto, receptor],
  };

  try {
    await pool.query("BEGIN");
    await pool.query(registerTranfer);
    await pool.query(updateBalanceEmisor);
    await pool.query(updateBalanceReceptor);
    await pool.query("COMMIT");
    return true;
  } catch (error) {
    await pool.query("ROLLBACK");
    console.error("Error Code:", error.code, "Error Message:", error.message);
  }
};
export const getTransferQuery = async () => {
  try {
    const querys = {
      text: `SELECT
        e.nombre AS emisor,
        r.nombre AS receptor,
        t.monto,
        t.fecha
      FROM
        transferencias t
      JOIN
        usuarios e ON t.emisor = e.id
      JOIN
        usuarios r ON t.receptor = r.id;`,
      rowMode: "array",
    };
    const response = await pool.query(querys); if (response.rowCount > 0) {
      return response.rows
    } else {
      return new Error('Error al obtener Transferencias')
    }
  }
  catch (error) {
    console.log(error.message)
  }
};