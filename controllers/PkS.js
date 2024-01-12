import PKS from "../models/PksModel.js";
import Users from "../models/UserModel.js";
import { Op } from "sequelize";
export const getPkss = async (req, res) => {
  try {
    let response;
    if(req.role === "admin"){
      response = await PKS.findAll({
        attributes:['uuid', 'no_mou', 'no_pks', 'tentang', 'mitra', 'keterangan', 'file'],
        include:[{
            model: Users,
            attributes:['name','email']
        }]
      })
    }else{
      response = await PKS.findAll({
        attributes:['uuid', 'no_mou', 'no_pks', 'tentang', 'mitra', 'keterangan', 'file'],
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

export const getPksById = async (req, res) => {
  try {
    const pks = await PKS.findOne({
      where: {
        uuid: req.params.id
      }
    })
    if(!pks) return res.status(404).json({msg: "Data tidak ditemukan"})
    let response;
    if(req.role === "admin"){
      response = await PKS.findOne({
        attributes:['uuid', 'no_mou', 'no_pks', 'tentang', 'mitra', 'keterangan', 'file'],
        where: {
          id: pks.id
        },
        include:[{
            model: Users,
            attributes:['name','email']
        }]
      })
    }else{
      response = await PKS.findOne({
        attributes:['uuid', 'no_mou', 'no_pks', 'tentang', 'mitra', 'keterangan', 'file'],
        where: {
          [Op.and]:[{id: pks.id}, {userId: req.userId}]
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

export const createPks = async (req, res) => {
  const {no_mou, no_pks, tentang, mitra, keterangan, file} = req.body;
  try {
    await PKS.create({
      no_mou: no_mou,
      no_pks: no_pks,
      tentang: tentang,
      mitra: mitra,
      keterangan: keterangan,
      file:file,
      userId: req.userId
    });
    res.status(201).json({msg: "Pks Created Successfuly" })
   
  } catch (error) {
    res.status(500).json({msg: error.message})
  
    
  }
}

export const updatePks = async (req, res) => {
  try {
    const pks = await PKS.findOne({
      where: {
        uuid: req.params.id
      }
    })
    if(!pks) return res.status(404).json({msg: "Data tidak ditemukan"})
    const {no_mou, no_pks, tentang, mitra, keterangan, file} = req.body;
    if(req.role === "admin"){
      await PKS.update({no_mou, no_pks, tentang, mitra, keterangan, file},{
        where: {
          id: pks.id
        }
      });
    }else{
      if(req.userId !== pks.userId) return res.status(403).json({msg: "Akses Terlarang"})
      await PKS.update({no_mou, no_pks, tentang, mitra, keterangan, file},{
     where: {
      [Op.and]:[{id: pks.id}, {userId: req.userId}]
  }
    });
  }
    res.status(200).json({msg: "Pks updated"});
  } catch (error) {
    res.status(500).json({msg: error.message})
    
  }
}

export const deletePks = async (req, res) => {
  try {
    const pks = await PKS.findOne({
      where: {
        uuid: req.params.id
      }
    })
    if(!pks) return res.status(404).json({msg: "Data tidak ditemukan"})
    const {no_mou, no_pks, tentang, mitra, keterangan, file} = req.body;
    if(req.role === "admin"){
      await PKS.destroy({
        where: {
          id: pks.id
        }
      });
    }else{
      if(req.userId !== pks.userId) return res.status(403).json({msg: "Akses Terlarang"})
      await PKS.destroy({
     where: {
      [Op.and]:[{id: pks.id}, {userId: req.userId}]
  }
    });
  }
    res.status(200).json({msg: "Pks deleted successfuly"});
  } catch (error) {
    res.status(500).json({msg: error.message})
    
  }
}
