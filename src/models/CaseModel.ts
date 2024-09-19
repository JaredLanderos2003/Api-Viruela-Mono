// src/models/Case.ts
import mongoose, { Schema, Document } from 'mongoose';

export interface ICase extends Document {
  lat: number;
  lng: number;
  isSent: boolean;
  genre: string;
  age: number;
  creationDate: Date;
}

const CaseSchema: Schema = new Schema({
  lat: { type: Number, required: true },
  lng: { type: Number, required: true },
  isSent: { type: Boolean, default: false },
  genre: { type: String, required: true },
  age: { type: Number, required: true },
  creationDate: { type: Date, default: Date.now }
});

export default mongoose.model<ICase>('Case', CaseSchema);
