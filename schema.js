// users schema
{
  _id: ObjectId,
  username: String,
  password: String,
  email: String,
  dateOfBirth: Date,
  createdDate: Date
}

// basic clinic schema
{
    _id: ObjectId,
    clinicName: String,
    desc: String,
    logo: BinData, // or use storage API here to avoid storing this is database
    clinicEmail: String,
    clinicPhone: Number,
    gps: String,
    uniquiID: String  // we can still use the ObjectId instead geberating new ids
}

// basic doctors Schema
{
  _id: ObjectId,
  title: String,
  firstName: String,
  lastName: String,
  email: String,
  phone: Number,
  clinicDetails: Schema,
  photo: String // expected to use storage API in Google Cloud Engine instead of BinData
}

// basic patients schema
{
  _id: ObjectId,
  pat_reg: String
  userDetails: Schema // user schema
}


// frontline staff
{
    _id: ObjectId,
    userDetails: Schema, // users schema
    clinicDetails: Schema // clinic Schema

}

// administrator
{
  _id: ObjectId
  userDetails: Schema,
  clinicDetails: Schema // clinic Schema
}
