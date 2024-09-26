import Spinner from "react-bootstrap/Spinner";

function Loading() {
	return (
		<Spinner animation="border" role="status" style={{ width: "6rem", height: "6rem" }}>
			<span className="visually-hidden">Loading...</span>
		</Spinner>
	);
}

export default Loading;