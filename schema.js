/**
*	TODO: need more details to define other schema
**/

// we need an appointment schema 
{
  _id: ObjectId,
  slotStart: Date, //what time it starts (date)
  slotEnd: Date, //what time it ends (date)
  status: String, //todo: need to decide appropriate values
  patient: Schema,
  doctor: Schema,
  createdDate: Date
  createdBy: Schema //can either be doctor or staff
}

// address schema 
{
  _id: ObjectId,
  street: String,
  city: String,
  postalCode: String,
  province: String,
  gps: String
}

// users schema
{
  _id: ObjectId,
  firstName: String,
  lastName: String,
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
    address: Schema, //we might need it for other actors later
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
