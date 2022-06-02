import { ResponseModel } from "./responseModel";

export interface ListResponseModel<TModel> extends ResponseModel{
    listData:TModel[];
    count:number;
}