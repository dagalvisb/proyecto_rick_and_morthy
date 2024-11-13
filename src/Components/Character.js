import { Link } from "react-router-dom";

const Character = ({id, name, image, status, species, location, gender}) => {
    let badgeColor = '';
    if (status === 'Alive'){
        badgeColor = 'bg-green';
    }else if (status === 'Dead'){
        badgeColor = 'bg-red';
    }else {
        badgeColor = 'bg-gray';
    }
    return(   
        
    <div className = "col">
        <div className="card mb-3">
            <div className="row g-0 text-bg-dark">
                <div className="col-md-5">
                    <img src={image} className="img-fluid rounded-start" alt={name}/>
                </div>
                <div className="col-md-7">
                    <div className="card-body">
                        <h5 className="card-title" ><Link to = {`characters/${id}`}><strong>{name}</strong></Link></h5>
                        <p><span className={`status-dot ${badgeColor}`} ></span> {status} - {species}</p>
                        <p>
                            Last Know location:
                            <br></br>
                            <strong>{location}</strong>
                        </p>
                        <p>
                            Genero:
                            <br></br>
                            <strong>{gender}</strong>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Character;