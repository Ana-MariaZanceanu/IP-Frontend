import axios from "axios";
import jwt from "jsonwebtoken";
import { setAuthorizationToken } from "../helpers/auth";

const host = "https://ip-accounts.herokuapp.com/";

const login = async (email, password) => {
  try {
    const {
      data: { user, token },
    } = await axios({
      method: "post",
      url: host + "api/users/login",
      data: {
        email,
        password,
      },
    });
    localStorage.setItem("userToken", token);

    return { success: true, user };
  } catch (error) {
    return { success: false, errorMessage: error.message };
  }
};

const lostPassword = async (email) => {
  try {
    await axios({
      method: "post",
      url: host + "api/users/lostpassword",
      data: {
        email,
      },
    });

    return { success: true };
  } catch (error) {
    return { success: false, errorMessage: error.message };
  }
};

const register = async (username, role, email, password) => {
  try {
    const data = await axios
      .post(host + "api/users/register", {
        email: email,
        password: password,
        role: role,
        name: username,
      })
      .then(async (response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    return { success: true };
  } catch (error) {
    return { success: false, errorMessage: error.message };
  }
};

const getUserByEmail = async (email) => {
  try {
    let responseSuccess;
    let responseData;
    const data = await axios
      .post(host + "api/users/verifyLoginFacebook", {
        email: email,
      })
      .then(async (response) => {
        responseData = response;
        responseSuccess = true;
      })
      .catch((error) => {
        responseSuccess = false;
        console.log(error.response.data);
      });
    return { success: responseSuccess, data: responseData.data.data };
  } catch (error) {
    return { success: false, errorMessage: error.message };
  }
};

const getUser = async () => {
  try {
    const token = localStorage.getItem("userToken");
    const { _id } = jwt.decode(token);
    setAuthorizationToken(token);

    const {
      data: {
        data: { user },
      },
    } = await axios({
      method: "get",
      url: host + "api/users/" + _id,
    });

    return { success: true, user };
  } catch (error) {
    return { success: false, errorMessage: error.message };
  }
};

const getAllUsers = async () => {
  try {
    const token = localStorage.getItem("userToken");
    setAuthorizationToken(token);

    const {
      data: {
        data: { users },
      },
    } = await axios({
      method: "get",
      url: host + "api/users/",
    });

    return { success: true, users };
  } catch (error) {
    return { success: false, errorMessage: error.message };
  }
};

const changeEmail = async (userData) => {
  try {
    console.log("api" + userData);
    const token = localStorage.getItem("userToken");
    setAuthorizationToken(token);
    const {
      data: {
        data: { userDetails },
      },
    } = await axios({
      method: "post",
      url: host + "api/users/changeemail",
      data: userData,
    });
    return { success: true, userDetails };
  } catch (error) {
    return { success: false, errorMessage: error.message };
  }
};

const changeName = async (userData) => {
  try {
    console.log("api" + userData);
    const token = localStorage.getItem("userToken");
    setAuthorizationToken(token);
    const {
      data: {
        data: { userDetails },
      },
    } = await axios({
      method: "post",
      url: host + "api/users/changename",
      data: userData,
    });
    return { success: true, userDetails };
  } catch (error) {
    return { success: false, errorMessage: error.message };
  }
};

const changePassword = async (userData) => {
  try {
    console.log("api" + userData);
    const token = localStorage.getItem("userToken");
    setAuthorizationToken(token);
    const {
      data: {
        data: { userDetails },
      },
    } = await axios({
      method: "post",
      url: host + "api/users/changepassword",
      data: userData,
    });
    return { success: true, userDetails };
  } catch (error) {
    return { success: false, errorMessage: error.message };
  }
};

const profile = async (userData) => {
  try {
    const token = localStorage.getItem("userToken");
    setAuthorizationToken(token);
    const {
      data: {
        data: { userDetails },
      },
    } = await axios({
      method: "post",
      url: host + "api/users/profile",
      data: userData,
    });
    console.log(userDetails);
    return { success: true, userDetails };
  } catch (error) {
    return { success: false, errorMessage: error.message };
  }
};

const uploadMenuPhoto = async (data) => {
  try {
    let imageUrl = {};
    const formData = new FormData();
    formData.append("myImage", data.file);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    await axios
      .post(
        host + "api/upload/uploadMenuPhoto/" + data.idCourse,
        formData,
        config
      )
      .then((response) => {
        imageUrl = response.data.name.newPath;
        console.log(response.data.name.newPath);
        if (response.data.success) {
          alert("The file is successfully uploaded");
        } else {
          alert(response.data.error);
        }
      })
      .catch((error) => {});

    return { success: true, response: imageUrl };
  } catch (error) {
    return { success: false, errorMessage: error.message };
  }
};

const uploadSingle = async (data) => {
  try {
    const formData = new FormData();
    formData.append("myImage", data.file);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    await axios
      .post(host + "api/upload/uploadSingle/" + data.userId, formData, config)
      .then((response) => {
        if (response.data.success) {
          alert("The file is successfully uploaded");
        } else {
          alert(response.data.error);
        }
      })
      .catch((error) => {});

    return { success: true };
  } catch (error) {
    return { success: false, errorMessage: error.message };
  }
};

const deleteSingle = async (userId) => {
  try {
    await axios
      .post(host + "api/upload/deletePhotoClient/" + userId)
      .then((response) => {
        alert("The file is successfully deleted.");
      })
      .catch((error) => {});

    return { success: true };
  } catch (error) {
    return { success: false, errorMessage: error.message };
  }
};

const uploadMultiple = async (data) => {
  try {
    console.log(host + "api/upload/uploadMultiple/" + data.userId);
    const formData = new FormData();
    let { length } = data.file;
    for (let i = 0; i < length; i++) {
      formData.append("myImage", data.file[i]);
    }
    console.log(data.userId);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    await axios
      .post(host + "api/upload/uploadMultiple/" + data.userId, formData, config)
      .then((response) => {
        if (response.data.succes) {
          alert("The file is successfully uploaded");
        } else {
          alert(response.data.error);
        }
      })
      .catch((error) => {
        console.log(error);
      });

    return { success: true };
  } catch (error) {
    return { success: false, errorMessage: error.message };
  }
};

const deleteMultiple = async (userId) => {
  try {
    await axios
      .post(host + "api/upload/deletePhotoProvider/" + userId)
      .then((response) => {
        alert("The files are successfully deleted.");
      })
      .catch((error) => {});

    return { success: true };
  } catch (error) {
    return { success: false, errorMessage: error.message };
  }
};

const addCourse = async (idMenu) => {
  try {
    const token = localStorage.getItem("userToken");
    setAuthorizationToken(token);
    const {
      data: {
        data: { courses },
      },
    } = await axios({
      method: "post",
      url: host + "api/courses/" + idMenu,
    });

    return { success: true, courses };
  } catch (error) {
    return { success: false, errorMessage: error.message };
  }
};

const deleteCoursePhoto = async (idCourse) => {
  try {
    await axios
      .post(host + "api/upload/deletePhotoCourse/" + idCourse)
      .then((response) => {
        alert("The file is successfully deleted.");
      })
      .catch((error) => {});

    return { success: true };
  } catch (error) {
    return { success: false, errorMessage: error.message };
  }
};

const updateCourse = async (idCourse, courseData) => {
  try {
    const token = localStorage.getItem("userToken");
    setAuthorizationToken(token);
    const {
      data: {
        data: { userDetails },
      },
    } = await axios({
      method: "patch",
      url: host + "api/courses/" + idCourse,
      data: courseData,
    });
    return { success: true, userDetails };
  } catch (error) {
    return { success: false, errorMessage: error.message };
  }
};

const deleteCourse = async (idCourse) => {
  try {
    const token = localStorage.getItem("userToken");
    setAuthorizationToken(token);
    const {
      data: {
        data: { courses },
      },
    } = await axios({
      method: "delete",
      url: host + "api/courses/" + idCourse,
    });
    return { success: true, courses };
  } catch (error) {
    return { success: false, errorMessage: error.message };
  }
};

export {
  register,
  login,
  getUser,
  getAllUsers,
  uploadSingle,
  uploadMultiple,
  changePassword,
  changeEmail,
  changeName,
  uploadMenuPhoto,
  profile,
  lostPassword,
  addCourse,
  updateCourse,
  getUserByEmail,
  deleteCourse,
  deleteSingle,
  deleteMultiple,
  deleteCoursePhoto,
};
