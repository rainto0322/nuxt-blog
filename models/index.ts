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
    set: formatDate
  },
  body: { type: String },
  html: { type: String },
  img: { type: Array }
}, options)

export {
  User, Memos
}
