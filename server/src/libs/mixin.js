function checkInFile(req, objectParams) {
  /*
        This function check in the request looking for file object 
    */
  if (req.file) {
    return (objectParams.image = ` ${req.protocol}://${
      req.hostname
    }:${4000}/public/uploads/${req.file.filename}`);
  } else {
    return (objectParams.image = ` ${req.protocol}://${
      req.hostname
    }:${4000}/public/uploads/withoutImg`);
  }
}
module.exports = {
  checkInFile
};
