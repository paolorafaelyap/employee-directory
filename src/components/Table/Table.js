function Table(props) {
    return (
        <tbody>
            <tr>
                <td>{props.id}</td>
                <td>{props.name}</td>
                <td>{props.dob}</td>
                <td>{props.role}</td>
                <td>{props.email}</td>
                <td>{props.phone}</td>
            </tr>
        </tbody>
    )
}

export default Table;