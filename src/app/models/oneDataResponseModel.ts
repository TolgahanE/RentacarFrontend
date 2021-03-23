import { ResponseModel } from "./responseModel";

export interface oneDataResponseModel<T> extends ResponseModel{
    data:T;
}