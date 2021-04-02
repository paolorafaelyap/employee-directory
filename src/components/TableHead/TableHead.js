function TableHead(props) {
    return (
        <thead>
            <tr>
                <th scope="col" onClick={() => {props.clickSort("id")}}>ID</th>
                <th scope="col" onClick={() => {props.clickSort("name")}}>Name</th>
                <th scope="col" onClick={() => {props.clickSort("dob")}}>DOB</th>
                <th scope="col" onClick={() => {props.clickSort("role")}}>Role</th>
                <th scope="col" onClick={() => {props.clickSort("email")}}>Email</th>
                <th scope="col" onClick={() => {props.clickSort("phone")}}>Phone</th>
            </tr>
        </thead>
    );
}

export default TableHead;