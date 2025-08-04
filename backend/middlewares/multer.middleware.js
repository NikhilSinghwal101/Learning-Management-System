// import path from "path";

// import multer from "multer";

// const upload = multer({
//   dest: "uploads/",
//   limits: { fieldSize: 100 * 1024 * 1024 }, // 100 mb in size max limit // Here should be fieldSize instead of fileSize
//   storage: multer.diskStorage({
//     destination: "uploads/",
//     filename: (_req, file, cb) => {
//       cb(null, file.originalname);
//     },
//   }),
//   fileFilter: (_req, file, cb) => {
//     let ext = path.extname(file.originalname);

//     if (
//       ext !== ".jpg" &&
//       ext !== ".jpeg" &&
//       ext !== ".webp" &&
//       ext !== ".png" &&
//       ext !== ".mp4"
//     ) {
//       cb(new Error(`Unsupported file type! ${ext}`), false);
//       return;
//     }

//     cb(null, true);
//   },
// });

// export default upload;



//---------------------------------------------------------------------


// import multer from 'multer';
// import path from 'path';

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads/");
//   },
//   filename: (req, file, cb) => {
//     cb(null, file.originalname);
//   },
// });

// const upload = multer({ storage });

// export default upload;


import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    cb(null, `${file.fieldname}-${Date.now()}${ext}`);
  },
});

const upload = multer({ storage });

export default upload;





