import mongoose from "mongoose";
const {Schema,model} = mongoose;


const PaymentSchema = newSchema({
    name:{type:String, required:true},
    to_user:{type:String,required:true},
    oid:{type:String,required:true},
    message:{type:String},
    amount:{type:Number,required:true},
    createdAt:{type:Date,default:Date.now},
    updated_At:{type:Date,default:Date.now},
    done:{type:Boolean,default:false}
        
});


export default mongoose.models.Payment || model("Payment", PaymentSchema);