import { NavLink } from "react-router";
import "./CadastroForm.css"
import "../screens/Cadastro.css"

export default function CadastroForm() {
    return (
        // bg-red-500 | max-sm:text-center
        <div className="bg-white cadastroform relative font-mono">
            {/* bg-green-950 */}
            <div className="pt-14 pb-14">
                <div className="bg-gray-300 w-28 h-28 imgcontainer">
                    <img src="../../../../../assets/images/Rooftops_Emerald_Ring_Racers_(Bigger).png" width="150"
                    height="auto" />
                </div>
            </div>

            {/* bg-green-300 */}
            <div className="text-gray-600 containerleftpadding">
                <h1 className="h-12 text-4xl">Cadastro</h1>
                <p className="h-10">Já possui sua conta? <NavLink to="/login" className="text-yellow-600
                hover:text-yellow-400 font-semibold">
                Login</NavLink></p>
            </div>

            <div>
                <form>
                    <div className="inline-flex space-x-[10vw] text-gray-600 text-lg containerleftpadding">
                        <div className="inline-flex space-x-2">
                            <input type="radio" name="role"/>
                            <p>Professor</p>
                        </div>

                        <div className="inline-flex space-x-2">
                            <input type="radio" name="role"/>
                            <p>Aluno</p>
                        </div>
                    </div>

                    {/* bg-green-500 */}
                    <div className="pt-2 pb-2 text-center">
                        <div className="">
                            <input type="text" className="textinput nameinput" placeholder="Nome *"/>
                            <br className="nameinputbreak mb-4"/>
                            <input type="text" className="textinput nameinput" placeholder="Sobrenome *"/>
                          <br className="mb-4"/>
                        </div>                          

                        <div>
                            <input type="email" className="textinput otherinputs" placeholder="Preencha com seu Email *"/>
                              <br className="mb-4"/>
                            <input type="password" className="textinput otherinputs" placeholder="Senha *"/>
                              <br className="mb-4" />
                            <input type="tel" className="textinput otherinputs" placeholder="Telefone *"/>
                        </div>
                    </div>

                    {/* bg-green-100 */}
                    <div className=" inline-flex space-x-[3vw] mt-5 text-gray-600 text-lg containerleftpadding">
                        <p>Gênero:</p>
                        <div className="inline-flex space-x-2">
                            <input type="radio" name="gender"/>
                            <p>Masculino</p>
                        </div>

                        <div className="inline-flex space-x-2">
                            <input type="radio" name="gender"/>
                            <p>Feminino</p>
                        </div>
                    </div>
                </form>

                <button className="confirmbtn hover:bg-yellow-500 mt-20 mb-8 p-2 rounded-3xl block m-auto">
                    <div className="inline-flex ml-2 mr-2 align-middle">
                        <img src="../../../../../assets/images/Rooftops_Emerald_Ring_Racers_(Bigger).png" width="50"
                        height="auto" />
                        <p className="text-gray-600 text-2xl text-center ml-3">Cadastro</p>
                    </div>
                </button>
            </div>
        </div>
    )
}