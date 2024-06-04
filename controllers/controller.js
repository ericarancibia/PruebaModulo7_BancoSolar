import path from "path";
import { addUserQuery, getUserQuery, editUserQuery, deleteUserQuery, addTranferQuery, getTransferQuery } from "../models/queries.js";

const __dirname = path.resolve();

export const home = (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
};

export const addUser = async (req, res) => {
  try {
    const { nombre, balance } = req.body;
    const datos = [nombre, balance];
    const newUser = await addUserQuery(datos);
    res.status(200).json(newUser);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar Usuario' });
  }
};

export const getUser = async (req, res) => {
  try {
    const users = await getUserQuery();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener Usuario' });
  }
};

export const editUser = async (req, res) => {
  try {
    const { id } = req.query;
    const { nombre, balance } = req.body;

    const datos = [nombre, balance, id];
    const editUser = await editUserQuery(datos);
    res.status(200).json(editUser);
  } catch (error) {
    res.status(500).json({ message: 'Error al editar Usuario' });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.query;

    const deleteUser = await deleteUserQuery(id);
    res.status(200).json(deleteUser);
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar Usuario' });
  }
};

export const addTranfer = async (req, res) => {
  try {
    console.log("body", req.body);
    const datos = req.body;
    console.log(datos);
    const result = await addTranferQuery(datos);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: 'Error al realizar Transferencia' });
  }
};

export const getTranfer = async (req, res) => {
  try {
    const result = await getTransferQuery();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener Transferencias' });
  }
}

