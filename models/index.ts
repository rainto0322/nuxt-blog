import { defineMongooseModel } from '@/utils/index'
import dayjs from 'dayjs'

const formatDate = (date: any) => dayjs().format('YYYY-MM-DD HH:mm')
const options = {
  versionKey: false,
  virtuals: false,
  timestamps: false
}

const User = defineMongooseModel('user', {
  name: { type: String, unique: true, trim: true },
  password: { type: String, trim: true },
  group: { type: String, default: ["tourist", "owner"] },
  email: { type: String, unique: true }
}, options)

const Memos = defineMongooseModel('memo', {
  date: {
    type: String, default: Date.now(),
    // set: formatDate
  },
  body: { type: String },
  img: { type: Array, default: undefined }
}, options)

const Album = defineMongooseModel('album', {
  name: { type: String, unique: true, trim: true },
  base64: { type: String }
}, options)

export {
  User, Memos, Album
}
