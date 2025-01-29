import { NavLink } from 'react-router'
import './LoginForm.css'

export default function LoginForm() {
    return (
        <div className="absolute loginform font-mono">
            <div className="text-center my-5 mx-8">
                {/* bg-blue-200 */}
                <div className='tb:pt-12 max-tb:pt-20 tb:pb-10 max-tb:pb-16'>
                    <div className="bg-gray-50 w-28 h-28 imgcontainer">
                        <img src="../../../../../assets/images/Rooftops_Emerald_Ring_Racers_(Bigger).png" width="150"
                        height="auto" />
                    </div>
                </div>

                {/* bg-blue-400 */}
                <div className=' text-gray-600 tb:leftcontainerleftpadding tb:text-left'>
                    <h1 className='h-12 text-4xl max-tb:text-black'>Login</h1>
                    <p className='h-10 tb:text-sm max-tb:text-black'>Ainda não possui sua conta? 
                      <br className='sm:hidden'/> <NavLink to="/cadastro" className="text-yellow-600
                    hover:text-yellow-400 font-semibold max-tb:text-yellow-400 max-tb:hover:text-yellow-200">Cadastre-se</NavLink></p>
                </div>
                
                {/* bg-blue-700 */}
                <div className=''>
                    <form className='pt-4 pb-2'>
                        <input type="email" placeholder='Email *' className='logintextinput'/>
                        <br className='mb-16'/>
                        <input type="password" placeholder='Senha *' className='logintextinput'/>
                    </form>
                </div>

                {/* bg-blue-950 */}
                <div className='pb-2'>
                    <button className='confirmbtn hover:bg-yellow-500 mt-14 mb-8 p-2 px-16 rounded-3xl 
                    block m-auto'>
                        <p className='text-gray-600 text-xl text-center font-bold uppercase'>Login</p>
                    </button>
                </div>
            </div>
        </div>
    )
}