import MOU from "../models/MoUModel.js";
import Users from "../models/UserModel.js";
import { Op } from "sequelize";
export const getMous = async (req, res) => {
  try {
    let response;
    if(req.role === "admin"){
      response = await MOU.findAll({
        attributes:['uuid', 'no_mou', 'tentang', 'mitra', 'keterangan', 'file'],
        include:[{
            model: Users,
            attributes:['name','email']
        }]
      })
    }else{
      response = await MOU.findAll({
        attributes:['uuid', 'no_mou', 'tentang', 'mitra', 'keterangan', 'file'],
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

export const getMouById = async (req, res) => {
  try {
    const mou = await MOU.findOne({
      where: {
        uuid: req.params.id
      }
    })
    if(!mou) return res.status(404).json({msg: "Data tidak ditemukan"})
    let response;
    if(req.role === "admin"){
      response = await MOU.findOne({
        attributes:['uuid', 'no_mou', 'tentang', 'mitra', 'keterangan', 'file'],
        where: {
          id: mou.id
        },
        include:[{
            model: Users,
            attributes:['name','email']
        }]
      })
    }else{
      response = await MOU.findOne({
        attributes:['uuid', 'no_mou', 'tentang', 'mitra', 'keterangan', 'file'],
        where: {
          [Op.and]:[{id: mou.id}, {userId: req.userId}]
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

export const createMou = async (req, res) => {
  const {no_mou, tentang, mitra, keterangan, file} = req.body;
  try {
    await MOU.create({
      no_mou: no_mou,
      tentang: tentang,
      mitra: mitra,
      keterangan: keterangan,
      file:file,
      userId: req.userId
    });
    res.status(201).json({msg: "MoU Created Successfuly" })
   
  } catch (error) {
    res.status(500).json({msg: error.message})
  
    
  }
}

export const updateMou = async (req, res) => {
  try {
    const mou = await MOU.findOne({
      where: {
        uuid: req.params.id
      }
    })
    if(!mou) return res.status(404).json({msg: "Data tidak ditemukan"})
    const {no_mou, tentang, mitra, keterangan, file} = req.body;
    if(req.role === "admin"){
      await MOU.update({no_mou, tentang, mitra, keterangan, file},{
        where: {
          id: mou.id
        }
      });
    }else{
      if(req.userId !== mou.userId) return res.status(403).json({msg: "Akses Terlarang"})
      await MOU.update({no_mou, tentang, mitra, keterangan, file},{
     where: {
      [Op.and]:[{id: mou.id}, {userId: req.userId}]
  }
    });
  }
    res.status(200).json({msg: "MoU updated"});
  } catch (error) {
    res.status(500).json({msg: error.message})
    
  }
}

export const deleteMou = async (req, res) => {
  try {
    const mou = await MOU.findOne({
      where: {
        uuid: req.params.id
      }
    })
    if(!mou) return res.status(404).json({msg: "Data tidak ditemukan"})
    const {no_mou, tentang, mitra, keterangan, file} = req.body;
    if(req.role === "admin"){
      await MOU.destroy({
        where: {
          id: mou.id
        }
      });
    }else{
      if(req.userId !== mou.userId) return res.status(403).json({msg: "Akses Terlarang"})
      await MOU.destroy({
     where: {
      [Op.and]:[{id: mou.id}, {userId: req.userId}]
  }
    });
  }
    res.status(200).json({msg: "Mou deleted successfuly"});
  } catch (error) {
    res.status(500).json({msg: error.message})
    
  }
}
