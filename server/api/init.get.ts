import { User, Memos } from "../../models";

export default defineEventHandler(async (event) => {
    // const data = await Memos.findOne({ _id: "67947dbb325bcde050d09116" })
    const data = await new Memos({
        body: '#123',
        html: '123'
    }).save()
    return data
})