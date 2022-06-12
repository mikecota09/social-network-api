const router = require("express").Router();

const {
  getAllUsers,
  getUserById,
  addFriend,
  createUser,
  updateUser,
  deleteUser,
  removeFriend,
} = require("../../controllers/user-controller");

router.route("/").get(getAllUsers).post(createUser);

router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

router.route("/:id/friends/:friendsId").post(addFriend).delete(removeFriend);

module.exports = router;