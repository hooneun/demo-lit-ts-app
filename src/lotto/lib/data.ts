import axios from "axios";
import { Response } from "../../common/response"

axios.defaults.withCredentials = true;

interface ILotto {
    date: string,
    number1: number,
    number2: number,
    number3: number,
    number4: number,
    number5: number,
    number6: number,
    bonus_number: number,
    total_sell_amount: number,
    amount_of_winners: number,
    number_of_winners: number,
    total_amount_of_winners	:number,
}

export async function getLottos(): Promise<ILotto[] | null> {
    try {
        const {data} = await axios.get<Response>(
            "http://127.0.0.1:3000/",
            {
                headers: {
                    Accept: "application/json"
                },
            },
        );

        let lottos: ILotto[] = data.data;

        return lottos;
    } catch (error) {
        console.log("error: ", error)
        return null
    }
}