require('source-map-support/register');
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./firebase-service-key.json":
/*!***********************************!*\
  !*** ./firebase-service-key.json ***!
  \***********************************/
/*! exports provided: type, project_id, private_key_id, private_key, client_email, client_id, auth_uri, token_uri, auth_provider_x509_cert_url, client_x509_cert_url, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"type\":\"service_account\",\"project_id\":\"manitou-alfa-v1\",\"private_key_id\":\"9bc97a1962d2099cdde77abf03cd895a12ea3d17\",\"private_key\":\"-----BEGIN PRIVATE KEY-----\\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDTEWVwm+2xvUv1\\nE3N1kmaSkzjKmU1fBf4HEHUtnZnkrThjNw5ADMVvpZSFeVfzUPJQTGIRiI+FnMOe\\ntgnQvXB4b7aZ911BaZS2dCPDRUmpYmtr9vtiAOkFxwfgfizlg8h6Su5Eb7quDTcA\\n0apkW2KNL1RU3aGbzE1rtTVgjb5FE98TtSn+KnNivM47/Rtj36cpAcgGdHaNY7iB\\ngJSIF+hFRx+0PHytx58CcxUNZAKZOe41uW6doosmPGrqomnGwm44l2e8VQSJmrAy\\nB2AQTiTKwDhNtJPwL1UQrNo6AnJyvVqzEyId5G0d5DH48pmAvWoDzjKRhXl3irfq\\nSQtVY/rnAgMBAAECggEABWGxK3DeW6TO9f27+Oh1sxEL5qaIAX8+neF+i140WU9N\\nW8JAm8N3mUQoiEqywmJy+zcnXPkVZ7u6hSZxE6Bw6LE4f6598zgE8a3+Z3Ex0p7O\\nzF7sw+/wARS1D7VH4cY9a1jTwGz03pE5sMynwo1N8vmc9dj80OMhqjhhlwemLU6r\\nil0eAvj9kUxACQqKck/4hoaQu4twS7TEup9xYHDauAH0qeOKe6imTF7N4K0qAdvJ\\n5HMpWa2w1zy6ZSVjN++DQthq3X6GNfYXDWn2SlaLvGgLyLb8avubIVzYhlUBllwR\\n8m5dZsV01pfZfOVgknfTUFTZ6N79m9+jhpxBRd4n8QKBgQDv27MOuIJzFs3ZlreA\\nqHJ1m6p4pSBxmRRBMWFIK6KOKD1nNTWsJZy1it1kziYV3wCTJEbVi3SdnupWQnyw\\nMJHHmHeCf4hj21dQDT41nS4DvHlBwL9TYiksH7IVWCcTYAI17g5cOKuEVFAUrB5c\\nuMC7YFnEPn8egE00LPPbMdkZHwKBgQDhRbIT55cQ85BhEVgRLfUbuK7m4Tmxb+8w\\nUhZpo/fa+ihpUJM+WM7YJvwkdBcPWPjlX2tGXdrQH/m9WeUEmyI4Q/JJI3YdKMdH\\ntRl9IfQmHmWTAZRoi5G1ldQGu1Jr4tTVpAhSg4BccnRjqJ4V5ES4a1uTSdkWWiuu\\nmQ67r889OQKBgFIDtGkfK/PAY2i4QUyrzF9sd9DC3aIaLrPP96yexvmGxuAocI7J\\nWZk1v1f9qUYnN2IYsGPKSHiw4v3VxB7WrLIr7wlfJDrIwEUuEgxxD0/VvTx/dKxF\\nT0C4IcNsngfg90CLgruD4RnhXnSDGeqofbZUTr1shTjftAZYLJXRqKMPAoGAVSqt\\nVZsj4NPEjP4qpmwSk8Vx0nXqAuxHqKQQNyY3iYE0EATXdiXLJasvfnSpVzMS/lzh\\nyLupAzBjkbPPwrsH5+/AROh0Ojf1h2WvWkCg9lxdmINrYU8K6nTXsSfW1FTwlEis\\noM14lPrsh9Ty12HynSpxd7DesvWqOBtDl6+zEPkCgYBJ1cdlrE/J6ltoKJtV0n2L\\npj3xaRSWy30DmCjnrQiIqLHCYGIl4H8Co1gTY7s+sFQowSNWlAYlg6HiAT2OmUfG\\n/Cv4rz1rUiySNrKG2k8JPqcPsPkwNG/1s3MyoO66L0ZJ42Eu+f6W/GKxM7UsW3K/\\n4Hr+62pFUsZDvvB6AWkTgA==\\n-----END PRIVATE KEY-----\\n\",\"client_email\":\"firebase-adminsdk-ftv6e@manitou-alfa-v1.iam.gserviceaccount.com\",\"client_id\":\"100391249233628538173\",\"auth_uri\":\"https://accounts.google.com/o/oauth2/auth\",\"token_uri\":\"https://oauth2.googleapis.com/token\",\"auth_provider_x509_cert_url\":\"https://www.googleapis.com/oauth2/v1/certs\",\"client_x509_cert_url\":\"https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-ftv6e%40manitou-alfa-v1.iam.gserviceaccount.com\"}");

/***/ }),

/***/ "./src/controllers/AuthController.js":
/*!*******************************************!*\
  !*** ./src/controllers/AuthController.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const User = __webpack_require__(/*! ../models/User */ "./src/models/User.js");

const bcrypt = __webpack_require__(/*! bcryptjs */ "bcryptjs");

const jwt = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");

const register = (req, res, next) => {
  User.find({
    email: req.body.email
  }, function (err, users) {
    if (!users.length) {
      bcrypt.hash(req.body.password, 10, function (err, hashedPass) {
        if (err) {
          res.json({
            error: err
          });
        }

        let user = new User({
          name: req.body.name,
          email: req.body.email,
          password: hashedPass,
          role_id: req.body.role_id
        });
        user.save().then(user => {
          res.json({
            status: 'success',
            message: 'Вы успешно зарегистрировалтсь'
          });
        }).catch(error => {
          res.json({
            status: 'error',
            message: 'Произошла ошибка!'
          });
        });
      });
    } else {
      res.json({
        status: 'error',
        message: 'Адрес электронной почты уже существует'
      });
    }
  });
};

const login = (req, res, next) => {
  let email = req.body.email,
      password = req.body.password;
  User.findOne({
    $or: [{
      email
    }]
  }).then(user => {
    if (user) {
      bcrypt.compare(password, user.password, function (err, result) {
        if (err) {
          res.json({
            error: err
          });
        }

        if (result) {
          let token = jwt.sign({
            id: user.id,
            email: user.email,
            name: user.name,
            role_id: user.role_id
          }, process.env.JWT_SECRET_KEY, {
            expiresIn: '72h'
          });
          res.json({
            status: 'success',
            message: "Вход выполнен успешно",
            token
          });
        } else {
          res.json({
            status: 'error',
            message: 'Пароль не соответствует'
          });
        }
      });
    } else {
      res.json({
        status: 'error',
        message: "Пользователь не найден!"
      });
    }
  });
};

const user = (req, res, next) => {
  res.json({
    user: req.user
  });
};

const logout = (req, res) => {
  return res.status(200).json({
    message: 'Успешный выход из системы'
  });
};

module.exports = {
  register,
  login,
  logout,
  user
};

/***/ }),

/***/ "./src/controllers/GameController.js":
/*!*******************************************!*\
  !*** ./src/controllers/GameController.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__dirname) {const Game = __webpack_require__(/*! ../models/Game */ "./src/models/Game.js");

const fs = __webpack_require__(/*! fs */ "fs");

const path = __webpack_require__(/*! path */ "path");

const queue = __webpack_require__(/*! ../queue */ "./src/queue/index.js"); // const unzipper = require('unzipper')
// Confirmed games


const confirmed = (req, res, next) => {
  Game.find({
    status: 1
  }, function (err, games) {
    if (err) {
      res.json({
        status: 'error',
        message: 'Что-то пошло не так!'
      });
    } else {
      res.json({
        games
      });
    }
  });
}; // Creator games


const myGames = (req, res) => {
  Game.count({
    creator_id: req.user.id
  }, function (err, total) {
    if (err) {
      res.json({
        status: 'error',
        message: 'Что-то пошло не так!'
      });
    } else {
      Game.find({
        creator_id: req.user.id
      }, function (err, games) {
        if (err) {
          res.json({
            status: 'error',
            message: 'Что-то пошло не так!'
          });
        } else {
          res.json({
            games,
            total
          });
        }
      });
    }
  });
}; // All games


const index = (req, res, next) => {
  Game.count().then(total => {
    Game.find().then(response => {
      res.json({
        response,
        total
      });
    }).catch(error => {
      res.json({
        status: 'error',
        message: 'Что-то пошло не так!'
      });
    });
  });
}; // Single


const show = (req, res, next) => {
  let gameID = req.body.id;
  Game.findById(gameID).then(response => {
    res.json({
      response
    });
  }).catch(error => {
    res.json({
      status: 'error',
      message: 'Что-то пошло не так!'
    });
  });
}; // Create


const store = (req, res, next) => {
  let game = new Game({
    title: req.body.title,
    status: req.body.status === 'true',
    creator_id: req.body.creator_id,
    owner_id: req.body.owner_id
  });

  if (req.file) {
    game.file = req.file.path;
  } else {
    res.json({
      status: 'error',
      message: 'Пожалуйста загрузите файл!'
    });
    return;
  }

  game.save().then(game => {
    //       if (game.file) {
    //         fs.createReadStream(req.file.path).pipe(unzipper.Extract({ path: 'games/' + game.slug }))
    //
    //         // fs.readFile('games/'+game.slug+'/index.html', 'utf8', function (err,data) {
    //         //     if (err) {
    //         //         return console.log(111, err);
    //         //     }
    //         //     let result = data.replace(/src="js/g, 'src="http://localhost:4000/games/'+game.slug+'/js');
    //         //
    //         //     fs.writeFile('games/'+game.slug+'/index.html', result, 'utf8', function (err) {
    //         //         if (err) return console.log(222 ,err);
    //         //     });
    //         //     console.log(9999)
    //         // });
    //       }
    res.json({
      status: 'success',
      message: 'Игра успешно добавлена'
    });
  }).catch(error => {
    console.log(error);
    res.json({
      status: 'error',
      message: 'Произошла ошибка!'
    });
  });
}; // Update


const update = (req, res, next) => {
  let gameID = req.body.id,
      updateData = {
    title: req.body.title,
    status: req.body.status === 'true',
    creator_id: req.body.creator_id,
    owner_id: req.body.owner_id
  };

  if (req.file) {
    updateData.file = req.file.path;
  }

  Game.findByIdAndUpdate(gameID, {
    $set: updateData
  }, {
    upsert: true,
    new: true
  }, function (err, game) {
    if (err) {
      res.json({
        status: 'error',
        message: 'Произошла ошибка!'
      });
    } else {
      // if (req.file) {
      //   fs.createReadStream(req.file.path).pipe(unzipper.Extract({ path: 'games/' + game.slug }))
      // }
      res.json({
        status: 'success',
        message: 'Игра успешно обновлена'
      });
    }
  });
}; // Delete


const destroy = (req, res, next) => {
  let gameID = req.body.id;
  Game.findByIdAndRemove(gameID).then(response => {
    res.json({
      message: 'Игра успешно удалена'
    });
  }).catch(error => {
    res.json({
      message: 'Что-то пошло не так!'
    });
  });
}; // Get game html


const getGame = (req, res) => {
  const filePath = path.join(__dirname + './../games/' + req.query.slug + '/index.html');
  res.sendFile(filePath);
}; // Check status


const checkStatus = (req, res) => {
  Game.find({
    slug: req.query.slug
  }, function (err, game) {
    if (err) {
      res.json({
        status: 'error',
        message: 'Что-то пошло не так!'
      });
    } else {
      res.json({
        game
      });
    }
  });
};

module.exports = {
  confirmed,
  myGames,
  index,
  show,
  store,
  update,
  destroy,
  getGame,
  checkStatus
};
/* WEBPACK VAR INJECTION */}.call(this, "src/controllers"))

/***/ }),

/***/ "./src/controllers/UserController.js":
/*!*******************************************!*\
  !*** ./src/controllers/UserController.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const User = __webpack_require__(/*! ../models/User */ "./src/models/User.js");

const bcrypt = __webpack_require__(/*! bcryptjs */ "bcryptjs"); // All users


const index = (req, res) => {
  User.count().then(total => {
    User.find().then(response => {
      res.json({
        response,
        total
      });
    }).catch(error => {
      res.json({
        status: 'error',
        message: 'Что-то пошло не так!'
      });
    });
  });
}; // Single user


const show = (req, res) => {
  let userID = req.body.id;
  User.findById(userID).then(response => {
    res.json({
      response
    });
  }).catch(error => {
    res.json({
      status: 'error',
      message: 'Что-то пошло не так!'
    });
  });
}; // Create


const store = (req, res) => {
  User.find({
    email: req.body.email
  }, function (err, users) {
    if (!users.length) {
      bcrypt.hash(req.body.password, 10, function (err, hashedPass) {
        if (err) {
          res.json({
            error: err
          });
        }

        let user = new User({
          name: req.body.name,
          email: req.body.email,
          password: hashedPass,
          role_id: req.body.role_id
        });
        user.save().then(user => {
          res.json({
            status: 'success',
            message: 'Вы успешно зарегистрировалтсь'
          });
        }).catch(error => {
          res.json({
            status: 'error',
            message: 'Произошла ошибка!'
          });
        });
      });
    } else {
      res.json({
        status: 'error',
        message: 'Адрес электронной почты уже существует'
      });
    }
  });
}; // Update


const update = (req, res) => {
  let userID = req.body.id,
      updateData = {
    name: req.body.name,
    email: req.body.email,
    role_id: req.body.role_id
  },
      email = req.body.email;
  User.find({
    _id: userID
  }).then(user => {
    if (user[0].email !== email) {
      User.find({
        email
      }, function (err, users) {
        if (users.length) {
          res.json({
            status: 'error',
            message: 'Адрес электронной почты уже существует'
          });
        }
      });
    }

    if (req.body.password) {
      const salt = bcrypt.genSaltSync(10);
      updateData.password = bcrypt.hashSync(req.body.password, salt);
    }

    User.findByIdAndUpdate(userID, {
      $set: updateData
    }).then(() => {
      res.json({
        status: 'success',
        message: 'Пользователь успешно обновлен'
      });
    }).catch(error => {
      res.json({
        status: 'error',
        message: 'Произошла ошибка!'
      });
    });
  });
}; // Delete


const destroy = (req, res) => {
  let userID = req.body.id;
  User.findByIdAndRemove(userID).then(response => {
    res.json({
      status: 'success',
      message: 'Пользователь успешно удален'
    });
  }).catch(error => {
    res.json({
      status: 'error',
      message: 'Что-то пошло не так!'
    });
  });
};

module.exports = {
  index,
  show,
  store,
  update,
  destroy
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__dirname) {const express = __webpack_require__(/*! express */ "express");

const mongoose = __webpack_require__(/*! mongoose */ "mongoose");

const morgan = __webpack_require__(/*! morgan */ "morgan");

const bodyParser = __webpack_require__(/*! body-parser */ "body-parser");

const cors = __webpack_require__(/*! cors */ "cors");

const path = __webpack_require__(/*! path */ "path");

const dotenv = __webpack_require__(/*! dotenv */ "dotenv");

dotenv.config();
mongoose.connect(process.env.DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', err => {
  console.log(err);
}).once('open', () => {
  console.log('Database Connected');
});
const app = express();
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(cors());
app.use('/uploads', express.static('uploads'));
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {}); // Routes

const AuthRoute = __webpack_require__(/*! ./routes/auth */ "./src/routes/auth.js");

const UserRoute = __webpack_require__(/*! ./routes/user */ "./src/routes/user.js");

const GameRoute = __webpack_require__(/*! ./routes/game */ "./src/routes/game.js");

app.use('/api', AuthRoute);
app.use('/api/users', UserRoute);
app.use('/api/games', GameRoute);
app.use((req, res, next) => {
  const filePath = path.join(__dirname + '/404.html');
  return res.sendFile(filePath);
});
app.use((err, req, res, next) => {
  return res.status(err.status || 500).json({
    success: false,
    message: err.message
  });
});
/* WEBPACK VAR INJECTION */}.call(this, "src"))

/***/ }),

/***/ "./src/middleware/authenticate.js":
/*!****************************************!*\
  !*** ./src/middleware/authenticate.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const jwt = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");

const User = __webpack_require__(/*! ../models/User */ "./src/models/User.js");

const authenticate = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decode = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = decode;
    next();
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      res.status(200).json({
        message: 'Срок действия токена истек!'
      });
    } else {
      res.json({
        message: 'Ошибка аутентификации!'
      });
    }
  }
};

module.exports = authenticate;

/***/ }),

/***/ "./src/middleware/role.js":
/*!********************************!*\
  !*** ./src/middleware/role.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

const role = rolesArray => (req, res, next) => {
  if (!req.user) {
    return res.status(200).json({
      success: false,
      message: 'Сессия истекла',
      code: 'SESSION_EXPIRED'
    });
  }

  let authorized = false;
  rolesArray.some(role => {
    if (req.user.role_id === role) {
      authorized = 1;
      return;
    }
  });

  if (authorized) {
    return next();
  }

  return res.status(200).json({
    success: false,
    message: 'Неавторизованный'
  });
};

module.exports = role;

/***/ }),

/***/ "./src/middleware/upload.js":
/*!**********************************!*\
  !*** ./src/middleware/upload.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const path = __webpack_require__(/*! path */ "path");

const multer = __webpack_require__(/*! multer */ "multer");

const fs = __webpack_require__(/*! fs */ "fs");

const FirebaseStorage = __webpack_require__(/*! multer-firebase-storage */ "multer-firebase-storage"); // let storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         let fs = require('fs'),
//             uploads_folder = './uploads',
//             games_folder = './games'
//
//         if (!fs.existsSync(uploads_folder)){
//             fs.mkdirSync(uploads_folder);
//         }
//         if (!fs.existsSync(games_folder)){
//             fs.mkdirSync(games_folder);
//         }
//         cb(null, 'uploads/')
//     },
//     filename: function (req, file, cb) {
//         let ext = path.extname(file.originalname)
//         cb(null, Date.now() + ext)
//     }
// })


let upload = multer({
  storage: FirebaseStorage({
    bucketName: 'gs://manitou-alfa-v1.appspot.com',
    credentials: __webpack_require__(/*! ../../firebase-service-key.json */ "./firebase-service-key.json"),
    // directoryPath: 'games',
    unique: true
  }),
  fileFilter: function (req, file, callback) {
    if (file.mimetype === 'application/x-zip-compressed' || file.mimetype === 'application/zip') {
      callback(null, true);
    } else {
      callback(null, false);
    }
  },
  limits: {
    fileSize: 1024 * 1024 * 25
  }
});
module.exports = upload;

/***/ }),

/***/ "./src/models/Game.js":
/*!****************************!*\
  !*** ./src/models/Game.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const mongoose = __webpack_require__(/*! mongoose */ "mongoose");

const slug = __webpack_require__(/*! mongoose-slug-generator */ "mongoose-slug-generator");

const Schema = mongoose.Schema;
mongoose.plugin(slug);
const gameSchema = new Schema({
  title: {
    type: String
  },
  slug: {
    type: String,
    slug: "title",
    unique: true
  },
  status: {
    type: Boolean
  },
  owner_id: {
    type: String
  },
  creator_id: {
    type: String
  },
  data: {
    type: String
  },
  file: {
    type: String
  }
}, {
  timestamps: true
});
const Game = mongoose.model('Game', gameSchema);
module.exports = Game;

/***/ }),

/***/ "./src/models/GameJob.js":
/*!*******************************!*\
  !*** ./src/models/GameJob.js ***!
  \*******************************/
/*! exports provided: CREATED, FETCHING, FETCHED, INTERRUPTED, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATED", function() { return CREATED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCHING", function() { return FETCHING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCHED", function() { return FETCHED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INTERRUPTED", function() { return INTERRUPTED; });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const CREATED = 'CREATED';
const FETCHING = 'FETCHING';
const FETCHED = 'FETCHED';
const INTERRUPTED = 'INTERRUPTED';
const Schema = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema;
const gameJobSchema = new Schema({
  game_id: {
    type: Schema.Types.ObjectId,
    ref: 'Game'
  },
  state: {
    type: String,
    enum: [CREATED, FETCHING, FETCHED, INTERRUPTED],
    default: CREATED
  },
  state_history: [{
    type: String
  }],
  log: [{
    type: String
  }],
  error: {
    type: String,
    default: null
  },
  interrupt: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});
/* harmony default export */ __webpack_exports__["default"] = (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('GameJob', gameJobSchema));

/***/ }),

/***/ "./src/models/User.js":
/*!****************************!*\
  !*** ./src/models/User.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const mongoose = __webpack_require__(/*! mongoose */ "mongoose");

const Schema = mongoose.Schema;
const userSchema = new Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  password: {
    type: String
  },
  role_id: {
    type: Number
  }
}, {
  timestamps: true
});
const User = mongoose.model('User', userSchema);
module.exports = User;

/***/ }),

/***/ "./src/queue/index.js":
/*!****************************!*\
  !*** ./src/queue/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const queue = __webpack_require__(/*! mongo-queue */ "mongo-queue");

const GameJob = __webpack_require__(/*! ../models/GameJob */ "./src/models/GameJob.js");

class Addition extends queue.Template {//
}

module.exports = {
  createGameJob() {//
  }

};

/***/ }),

/***/ "./src/routes/auth.js":
/*!****************************!*\
  !*** ./src/routes/auth.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const express = __webpack_require__(/*! express */ "express");

const router = express.Router();

const AuthController = __webpack_require__(/*! ../controllers/AuthController */ "./src/controllers/AuthController.js");

const authenticate = __webpack_require__(/*! ../middleware/authenticate */ "./src/middleware/authenticate.js");

router.post('/register', AuthController.register);
router.post('/login', AuthController.login);
router.post('/logout', authenticate, AuthController.logout);
router.get('/details', authenticate, AuthController.user);
module.exports = router;

/***/ }),

/***/ "./src/routes/game.js":
/*!****************************!*\
  !*** ./src/routes/game.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const express = __webpack_require__(/*! express */ "express");

const router = express.Router();

const GameController = __webpack_require__(/*! ../controllers/GameController */ "./src/controllers/GameController.js");

const role = __webpack_require__(/*! ../middleware/role */ "./src/middleware/role.js");

const authenticate = __webpack_require__(/*! ../middleware/authenticate */ "./src/middleware/authenticate.js");

const upload = __webpack_require__(/*! ../middleware/upload */ "./src/middleware/upload.js");

router.get('/confirmed', GameController.confirmed);
router.get('/my-games', authenticate, role([2]), GameController.myGames);
router.get('/', authenticate, role([1]), GameController.index);
router.post('/show', authenticate, role([1, 2]), GameController.show);
router.post('/store', authenticate, role([1, 2]), upload.single('file'), GameController.store);
router.post('/update', authenticate, role([1, 2]), upload.single('file'), GameController.update);
router.post('/delete', authenticate, role([1, 2]), GameController.destroy);
router.get('/get-game', GameController.getGame);
router.get('/check-status', GameController.checkStatus);
module.exports = router;

/***/ }),

/***/ "./src/routes/user.js":
/*!****************************!*\
  !*** ./src/routes/user.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const express = __webpack_require__(/*! express */ "express");

const router = express.Router();

const UserController = __webpack_require__(/*! ../controllers/UserController */ "./src/controllers/UserController.js");

const authenticate = __webpack_require__(/*! ../middleware/authenticate */ "./src/middleware/authenticate.js");

const role = __webpack_require__(/*! ../middleware/role */ "./src/middleware/role.js");

router.get('/', authenticate, role([1]), UserController.index);
router.post('/show', authenticate, role([1]), UserController.show);
router.post('/store', authenticate, role([1]), UserController.store);
router.post('/update', authenticate, role([1]), UserController.update);
router.post('/delete', authenticate, role([1]), UserController.destroy);
module.exports = router;

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/oleg/igrodrom/back/src/index.js */"./src/index.js");


/***/ }),

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("bcryptjs");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("dotenv");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "mongo-queue":
/*!******************************!*\
  !*** external "mongo-queue" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongo-queue");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),

/***/ "mongoose-slug-generator":
/*!******************************************!*\
  !*** external "mongoose-slug-generator" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongoose-slug-generator");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("morgan");

/***/ }),

/***/ "multer":
/*!*************************!*\
  !*** external "multer" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("multer");

/***/ }),

/***/ "multer-firebase-storage":
/*!******************************************!*\
  !*** external "multer-firebase-storage" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("multer-firebase-storage");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ })

/******/ });
//# sourceMappingURL=main.map