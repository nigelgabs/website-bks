import LaporanMOU from "../models/LaporanMoUModel.js"
import Users from "../models/UserModel.js";
import { Op } from "sequelize";
export const getLaporanMous = async (req, res) => {
  try {
    let response;
    if(req.role === "admin"){
      response = await LaporanMOU.findAll({
        attributes:['uuid', 'no_mou', 'tentang', 'pic', 'no_telp', 'email', 'keterangan', 'file'],
        include:[{
            model: Users,
            attributes:['name','email']
        }]
      })
    }else{
      response = await LaporanMOU.findAll({
        attributes:['uuid', 'no_mou', 'tentang', 'pic', 'no_telp', 'email', 'keterangan', 'file'],
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

export const getLaporanMouById = async (req, res) => {
  try {
    const laporanmou = await LaporanMOU.findOne({
      where: {
        uuid: req.params.id
      }
    })
    if(!laporanmou) return res.status(404).json({msg: "Data tidak ditemukan"})
    let response;
    if(req.role === "admin"){
      response = await LaporanMOU.findOne({
        attributes:['uuid', 'no_mou', 'tentang', 'pic', 'no_telp', 'email', 'keterangan', 'file'],
        where: {
          id: laporanmou.id
        },
        include:[{
            model: Users,
            attributes:['name','email']
        }]
      })
    }else{
      response = await LaporanMOU.findOne({
        attributes:['uuid', 'no_mou', 'tentang', 'pic', 'no_telp', 'email', 'keterangan', 'file'],
        where: {
          [Op.and]:[{id: laporanmou.id}, {userId: req.userId}]
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

export const createLaporanMou = async (req, res) => {
  const {no_mou, tentang, pic, no_telp, email, Keterangan, file} = req.body;
  try {
    await LaporanMOU.create({
      no_mou: no_mou,
      tentang: tentang,
      pic: pic,
      no_telp: no_telp,
      email: email,
      Keterangan: Keterangan,
      file:file,
      userId: req.userId
    });
    res.status(201).json({msg: "Laporan Mou Created Successfuly" })
  } catch (error) {
    res.status(500).json({msg: error.message})
    
  }

}

export const updateLaporanMou = async (req, res) => {
  try {
    const laporanmou = await LaporanMOU.findOne({
      where: {
        uuid: req.params.id
      }
    })
    if(!laporanmou) return res.status(404).json({msg: "Data tidak ditemukan"})
    const {no_mou, tentang, pic, no_telp, email, keterangan, file} = req.body;
    if(req.role === "admin"){
      await LaporanMOU.update({no_mou, tentang, pic, no_telp, email, keterangan, file},{
        where: {
          id: laporanmou.id
        }
      });
    }else{
      if(req.userId !== laporanmou.userId) return res.status(403).json({msg: "Akses Terlarang"})
      await LaporanMOU.update({no_mou, tentang, pic, no_telp, email, keterangan, file},{
     where: {
      [Op.and]:[{id: laporanmou.id}, {userId: req.userId}]
  }
    });
  }
    res.status(200).json({msg: "Laporan Mou updated"});
    
  } catch (error) {
    res.status(500).json({msg: error.message})
  }

}

export const deleteLaporanMou = async (req, res) => {
  try {
    const laporanmou = await LaporanMOU.findOne({
      where: {
        uuid: req.params.id
      }
    })
    if(!laporanmou) return res.status(404).json({msg: "Data tidak ditemukan"})
    const {no_mou, tentang, pic, no_telp, email, keterangan, file} = req.body;
    if(req.role === "admin"){
      await LaporanMOU.destroy({
        where: {
          id: laporanmou.id
        }
      });
    }else{
      if(req.userId !== laporanmou.userId) return res.status(403).json({msg: "Akses Terlarang"})
      await LaporanMOU.destroy({
     where: {
      [Op.and]:[{id: laporanmou.id}, {userId: req.userId}]
  }
    });
  }
    res.status(200).json({msg: "Laporan Mou deleted successfuly"});
  } catch (error) {
    res.status(500).json({msg: error.message})
  }

}