import { ResponseModel } from "./responseModel";

export interface SingleResponseModel<TModel> extends ResponseModel{
    singleData:TModel;
}