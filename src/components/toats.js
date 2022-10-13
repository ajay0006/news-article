import {toast} from "react-toastify";

export const displayToast = (type, msg) => {
    switch (type) {
        case 'SUCCESS':
            toast.success(msg,{
                position: toast.POSITION.BOTTOM_RIGHT
            })
            break;
        case "ERROR":
            toast.error(msg,{
                position: toast.POSITION.BOTTOM_RIGHT
            })
            break;
        default:
            return false
    }

}