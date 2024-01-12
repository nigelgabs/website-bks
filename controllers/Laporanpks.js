import LaporanPKS from "../models/LaporanPksModel.js";
import Users from "../models/UserModel.js";
import { Op } from "sequelize";
export const getLaporanPkss = async (req, res) => {
  try {
    let response;
    if(req.role === "admin"){
      response = await LaporanPKS.findAll({
        attributes:['uuid', 'no_mou', 'no_pks', 'tentang', 'pic', 'no_telp', 'email', 'keterangan', 'file'],
        include:[{
            model: Users,
            attributes:['name','email']
        }]
      })
    }else{
      response = await LaporanPKS.findAll({
        attributes:['uuid', 'no_mou', 'no_pks', 'tentang', 'pic', 'no_telp', 'email', 'keterangan', 'file'],
        where: {
          userId: req.userId
        },
        include:[{
            model: Users,
            attributes:['name','email']
        }]
      })
    }
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({msg: error.message})
  
  }

}

export const getLaporanPksById = async (req, res) => {
  try {
    const laporanpks = await LaporanPKS.findOne({
      where: {
        uuid: req.params.id
      }
    })
    if(!laporanpks) return res.status(404).json({msg: "Data tidak ditemukan"})
    let response;
    if(req.role === "admin"){
      response = await LaporanPKS.findOne({
        attributes:['uuid', 'no_mou', 'no_pks', 'tentang', 'pic', 'no_telp', 'email', 'keterangan', 'file'],
        where: {
          id: laporanpks.id
        },
        include:[{
            model: Users,
            attributes:['name','email']
        }]
      })
    }else{
      response = await LaporanPKS.findOne({
        attributes:['uuid', 'no_mou', 'no_pks', 'tentang', 'pic', 'no_telp', 'email', 'keterangan', 'file'],
        where: {
          [Op.and]:[{id: laporanpks.id}, {userId: req.userId}]
        },
        include:[{
            model: Users,
            attributes:['name','email']
        }]
      })
    }
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({msg: error.message})
  }

}

export const createLaporanPks = async (req, res) => {
  const {no_mou, no_pks, tentang, pic, no_telp, email, Keterangan, file} = req.body;
  try {
    await LaporanPKS.create({
      no_mou: no_mou,
      no_pks: no_pks,
      tentang: tentang,
      pic: pic,
      no_telp: no_telp,
      email: email,
      Keterangan: Keterangan,
      file:file,
      userId: req.userId
    });
    res.status(201).json({msg: "Laporan Pks Created Successfuly" })
  } catch (error) {
    res.status(500).json({msg: error.message})
  }

}

export const updateLaporanPks = async (req, res) => {
  try {
    const laporanpks = await LaporanPKS.findOne({
      where: {
        uuid: req.params.id
      }
    })
    if(!laporanpks) return res.status(404).json({msg: "Data tidak ditemukan"})
    const {no_mou, no_pks, tentang, pic, no_telp, email, keterangan, file} = req.body;
    if(req.role === "admin"){
      await LaporanPKS.update({no_mou, no_pks, tentang, pic, no_telp, email, keterangan, file},{
        where: {
          id: laporanpks.id
        }
      });
    }else{
      if(req.userId !== laporanpks.userId) return res.status(403).json({msg: "Akses Terlarang"})
      await LaporanPKS.update({no_mou, no_pks, tentang, pic, no_telp, email, keterangan, file},{
     where: {
      [Op.and]:[{id: laporanpks.id}, {userId: req.userId}]
  }
    });
  }
    res.status(200).json({msg: "Laporan Pks updated"});
  } catch (error) {
    res.status(500).json({msg: error.message})
  }

}

export const deleteLaporanPks = async (req, res) => {
  try {
    const laporanpks = await LaporanPKS.findOne({
      where: {
        uuid: req.params.id
      }
    })
    if(!laporanpks) return res.status(404).json({msg: "Data tidak ditemukan"})
    const {no_mou, no_pks, tentang, pic, no_telp, email, keterangan, file} = req.body;
    if(req.role === "admin"){
      await LaporanPKS.destroy({
        where: {
          id: laporanpks.id
        }
      });
    }else{
      if(req.userId !== laporanpks.userId) return res.status(403).json({msg: "Akses Terlarang"})
      await LaporanPKS.destroy({
     where: {
      [Op.and]:[{id: laporanpks.id}, {userId: req.userId}]
  }
    });
  }
    res.status(200).json({msg: "Laporan Pks deleted successfuly"});
  } catch (error) {
    res.status(500).json({msg: error.message})
  }

}