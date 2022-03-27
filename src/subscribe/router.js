import express from "express";
import * as subscription from "./controller.js";
export const subscribeRouter = express.Router();

//생성
subscribeRouter.post("/create", subscription.createSubscriptionObject);
// //모두 조회
// subscribeRouter.get('/subscribes', getAllSubscribes);
// //조회
// subscribeRouter.get('/subscribe/:id', getSubscribe);
// //수정
// subscribeRouter.put('/update/:id', updateSubscribe);
// //취소
// subscribeRouter.delete('/cancle/:id', cancleSubscribe);
