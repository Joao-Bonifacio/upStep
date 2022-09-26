export default function Road(){
    var provisory = [
        {type:'urgent',title:'titulo1',description:'primeira description do primeiro card'},
        {type:'safe',title:'titulo2',description:'segunda description do segundo card'}]
    return(
        <div className='container mt-3 mb-2 bg-white' style={{borderRadius:'8px',padding:'2rem'}}>

            <div className="row">
                <div className="col-10">road🛣️</div>
                <div className="col-2" style={{textAlign:'right'}}>
                    <button type="button" className="btn">
                        <i class="fa-solid fa-circle-info"></i>
                    </button>
                </div>
            </div>

            <div className="row mt-2 mb-2">
                {provisory.map(e => (
                    <div className="card text-bg-primary mb-3 col-4 m-2" style={{maxWidth:'18rem'}}>
                        <div className="card-header">{e.type}</div>
                        <div className="card-body">
                            <h5 className="card-title">{e.title}</h5>
                            <p className="card-text">{e.description}</p>
                        </div>
                    </div>
                ))}

            <div className="card text-bg-primary mb-3 col-4 m-2" style={{maxWidth:'18rem'}}>
                <div className="card-header">Add Card +</div>
                    <div className="card-body">
                        <h5 className="card-title"><input type='text' placeholder='title' required/></h5>
                        <div className="row">
                            <p className="card-text col-10 m-0"><textarea placeholder="description" required></textarea></p>
                            <button type="button" className="btn p-3 col-2" /*onClick={addChart}*/>
                                    <i className="fa-solid fa-plus"></i>
                                </button>
                        </div>
                    </div>
                </div>
            </div>
              
            

        </div>
    )
}