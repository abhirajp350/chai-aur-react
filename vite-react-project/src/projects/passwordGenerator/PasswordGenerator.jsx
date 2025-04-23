import {useCallback, useState, useEffect, useRef} from 'react'

const PasswordGenerator = () => {

    const [password, setPassword] = useState("");
    const [length, setLength] = useState(8);
    const [numberAllowed, setNumberAllowed] = useState(false);
    const [charAllowed, setCharAllowed] = useState(false);

    // useref hook
    const passwordRef = useRef(null);

    const generatePassword = useCallback(() => {
        let pass = "";
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        if(numberAllowed) str += "0123456789";
        if(charAllowed) str += "!@#$%^&*()_-{}[]~`";

        for (let index = 1; index <= length; index++) {
          let char = Math.floor((Math.random() * str.length) + 1);
          pass += str.charAt(char);
            
        }
        setPassword(pass);

    }, [length, numberAllowed, charAllowed, setPassword]);

    const copyPasswordToClipboard = useCallback(() => {
        passwordRef.current?.select();
        // setSelectionRange method of javascript use to select range inside input range selector of input tag.
        // passwordRef.current.setSelectionRange(0,5);
        window.navigator.clipboard.writeText(password)
    }, [password])

    useEffect(() => { generatePassword();}, [length, numberAllowed, charAllowed, setPassword, generatePassword]);

  return (
    <>
        <div className='container-fluid'>
          <div className="container" style={{ width: "100%", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div className="card" style={{width: "50rem" }}>
                    <div className='card-header'>
                        <h2 className='bg-primary text-light text-center p-2 rounded'>Password Generator</h2>
                    </div>
                    <div className="card-body">
                       <div className="input-group">
                        <input 
                            type="text"
                            id="password"
                            className='form-control'
                            value={password}
                            readOnly
                            ref={passwordRef}
                            />
                        <button type="button" className='btn btn-primary' onClick={copyPasswordToClipboard}>Copy</button>
                       </div>
                       <div className="card-footer">
                            <div className='row mt-3'>
                                    <div className="col-md-4 my-2">
                                        <div className="input-group">
                                            <input type="range" id="slider" min={6} max={100} value={length} onChange={(e) => setLength(e.target.value)}/>
                                            <span className='my-2'><b htmlFor="slider" className='mx-2 text-danger'>Length</b>
                                            <i className='bg-secondary px-2 py-1 text-light rounded'>{length}</i>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="col-md-4 my-2">
                                        <div className="form-control" style={{ backgroundColor: "#800080" }}>
                                            <input type="checkbox" name="" id="num-allow" defaultChecked={numberAllowed} onChange={() => setNumberAllowed((previousValue) => !previousValue)}/>
                                            <label htmlFor="num-allow" className='ms-2 text-light'>Numbers Allow</label>
                                        </div>
                                    </div>
                                    <div className="col-md-4 my-2">
                                        <div className="form-control" style={{ backgroundColor: "seagreen" }}>
                                            <input type="checkbox" name="" id="char-allow" value={charAllowed } onChange={() => setCharAllowed((previousValue) => !previousValue)}/>
                                            <label htmlFor="char-allow" className='ms-2 text-light'>Characters Allow</label>
                                        </div>
                                    </div>
                            </div>
                       </div>
                    </div>
                </div>
          </div>
        </div>
    </>
  )
}

export default PasswordGenerator