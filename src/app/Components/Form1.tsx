import Image from "next/image";
import styles from "../page.module.css";
import 'bootstrap/dist/css/bootstrap.css';

export default function Form1() {

    async function SendNumber(e: any){
        e.preventDefault();
    
        const data = {
            Number: (e.target.Number.value)
        }

        if (data.Number >= 0){
            toRoman(data.Number)
        }else{
            alert("The number has to be greater than 0")
        }
        
      }
         
        const romanNumerals = [
            { value: 1000, numeral: 'M' },
            { value: 900, numeral: 'CM' },
            { value: 500, numeral: 'D' },
            { value: 400, numeral: 'CD' },
            { value: 100, numeral: 'C' },
            { value: 90, numeral: 'XC' },
            { value: 50, numeral: 'L' },
            { value: 40, numeral: 'XL' },
            { value: 10, numeral: 'X' },
            { value: 9, numeral: 'IX' },
            { value: 5, numeral: 'V' },
            { value: 4, numeral: 'IV' },
            { value: 1, numeral: 'I' }
        ];
        
        function toRoman(data: number) {
            let romanNumeral = '';
            for (let i = 0; i < romanNumerals.length; i++) {
                while (data >= romanNumerals[i].value) {
                    romanNumeral += romanNumerals[i].numeral;
                    data -= romanNumerals[i].value;
                }
            }
            alert(romanNumeral);
        }
      


  return (
      <form onSubmit={SendNumber} className="container col-6 text-center mt-4 bg-light">
        <div>
            <div className="form-group mt-5">
                <div className="form-group mb-3">
                    <label>Integer Number</label>
                    <input type="number" className="form-control" id="Number" required aria-describedby="emailHelp " />
                </div>
            </div>
            <button type="submit" className="btn btn-primary mt-3 mb-3 mx-auto d-block">Send Number</button>
        </div>
    </form>
  );
}
