import EmpleadoRow from "./EmpleadoRow";
import EmpleadoAvatar from "./EmpleadoAvatar";
import { Container, ListGroup } from "react-bootstrap";

import AvatarUno from "../assets/avatar (1).png";
import AvatarDos from "../assets/avatar (2).png";
import AvatarTres from "../assets/avatar (3).png";
import AvatarCua from "../assets/avatar (4).png";
import AvatarCin from "../assets/avatar (5).png";
import AvatarSe from "../assets/avatar (6).png";
import AvatarSi from "../assets/avatar (7).png";
import AvatarOch from "../assets/avatar (8).png";




export default function EmpleadoList() {
    const empleados = [
        { id: 1, nombre: "Daniela Lucia Villa", puesto: "CEO", area: "Marketing", avatar: AvatarUno },
        { id: 2, nombre: "Rafael Ortencio", puesto: "CTO", area: "Engineering", avatar: AvatarDos },
        { id: 3, nombre: "Carlos Josefo", puesto: "CFO", area: "Business", avatar: AvatarTres },
        { id: 4, nombre: "Maritrina Evaristo", puesto: "Backend", area: "Engineering", avatar: AvatarCua },
        { id: 5, nombre: "Janet Florencio", puesto: "CEO", area: "Marketing", avatar: AvatarCin },
        { id: 6, nombre: "Carla Josefa", puesto: "Dev", area: "Business", avatar: AvatarSe },
        { id: 5, nombre: "Martirio Casimiro", puesto: "Art Director", area: "Marketing", avatar: AvatarSi },
        { id: 6, nombre: "Chiara Perez", puesto: "Frontend Dev", area: "Engineering", avatar: AvatarOch }
    ]
    return (
        <>
            <Container fluid className="d-flex justify-content-center">
                <div className="">

                    <ListGroup variant="flush">
                    {empleados.map((empleado) => (
                        <ListGroup.Item key={empleado.id}>
                            <div className="box1" >
                                <EmpleadoAvatar imagen={empleado.avatar} />
                                <div className="box2" key={empleado.id}>
                                    <EmpleadoRow
                                        nombre={empleado.nombre}
                                        puesto={empleado.puesto}
                                        area={empleado.area}
                                    />
                                </div>
                            </div>
                        </ListGroup.Item>

                    ))}
                    </ListGroup>

                </div>
            </Container>
        </>
    )
}

