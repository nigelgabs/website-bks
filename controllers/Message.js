// import MESSAGE from "../models/MessagesModel.js";
// import Users from "../models/UserModel.js";
// import 

// export const getMessages = async (req, res) => {
//   try {
//     let response;
//     if(req.role === "admin"){
//       response = await MESSAGE.findAll({
//         attributes:['Name', 'email', 'Message'],
//         include:[{
//             model: Users,
//             attributes:['name','email']
//         }]
//       })
//     }else{
//       response = await MESSAGE.findAll({
//         attributes:['Name', 'email', 'Message'],
//         where: {
//           userId: req.userId
//         },
//         include:[{
//             model: Users,
//             attributes:['name','email']
//         }]
//       })
//     }
//     res.status(200).json(response);
//   } catch (error) {
//     res.status(500).json({msg: error.message})
  
//   }

// }

// export const getMessagesById = async (req, res) => {
//   try {
   
//   } catch (error) {
    
    
//   }
// }

// export const createMessages = async (req, res) => {

//   const {Name, email, Message} = req.body;
//   try {
//     await MESSAGE.create({
//       Name: Name,
//       email: email,
//       Message: Message,
//       userId: req.userId
//     });
//     res.status(201).json({msg: "Message Created Successfuly" })
   
//   } catch (error) {
//     res.status(500).json({msg: error.message})
  
    
//   }
// }
      
// export const updateMessages = async (req, res) => {

//  try {
 
// } catch (error) {
 
// }
// }

// export const deleteMessages = async (req, res) => {
 
//  try {
 
// } catch (error) {
  
// }
// }
