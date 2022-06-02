import { ResponseModel } from "./responseModel";

export interface DataResponseModel<TModel> extends ResponseModel{
    data:TModel;
}