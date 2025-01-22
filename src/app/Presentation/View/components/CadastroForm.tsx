import { NavLink } from "react-router";
import "./CadastroForm.css"

export default function CadastroForm() {
    return (
        <div className="bg-red-500 cadastroform">
            <div className="bg-green-300 pl-3 text-gray-600">
                <h1 className="h-12 text-3xl">Cadastro</h1>
                <p className="h-16">Já possui sua conta? <NavLink to="/login" className="text-yellow-400
                hover:text-yellow-200">
                Login</NavLink></p>
            </div>

            <div className="text-center">
                <form>
                    <div className="bg-green-500 pt-2 pb-2">
                        <div className="">
                            <input type="text" className="textinput nameinput"/>
                            <input type="text" className="textinput nameinput" />
                          <br className="mb-4"/>
                        </div>                          

                        <div>
                            <input type="email" className="textinput otherinputs"/>
                              <br className="mb-4"/>
                            <input type="email" className="textinput otherinputs"/>
                              <br className="mb-4" />
                            <input type="tel" className="textinput otherinputs"/>
                        </div>
                    </div>

                    <div className="bg-green-100 inline-flex space-x-10 mt-2 text-gray-600 text-lg">
                        <p>Gênero:</p>
                        <div className="inline-flex space-x-2">
                            <input type="radio" />
                            <p>Masculino</p>
                        </div>

                        <div className="inline-flex space-x-2">
                            <input type="radio" />
                            <p>Feminino</p>
                        </div>
                    </div>
                </form>

                <button className="bg-yellow-400 hover:bg-yellow-200 mt-20 mb-2 p-2 rounded-3xl">
                    <p className="text-gray-600 text-2xl">Cadastro</p>
                </button>
            </div>
        </div>
    )
}