import { Component } from 'react';

import styled from 'styled-components'

import './App.css';

const EmpItem = styled.div`
	padding: 20px;
	margin-bottom: 15px;
	border-radius: 30px;
	box-shadow: 5px 5px 10px rgba(0,0,0, .2);
	a {
		display: block;
		margin: 10px 0 10px 0;
		color: ${props => props.active ? 'orange' : 'grey'};
	}
	intup {
		display: block;
		margin-top: 10px;
	}
`

const Header = styled.h2`
	font-size: 22px;
`

export const Button = styled.button`
	display: block;
	padding: 5px 15px;
	background-color: gold;
	border: 1px solid rgba(0,0,0, .2);
`

class WhoAmI extends Component {

	constructor(props) {
		super(props);
		this.state = {
			years: 27,
			position: ''
		}
	}

	nextYear = () => {
		console.log('+++');

		this.setState(state => ({
			years: state.years + 1
		}))
	}

	commitInputChanges = (event, color) => {

		console.log(color);

		this.setState({
			position: event.target.value
		})
	}

	render() {
		const {name, surname, link} = this.props;

		return (
			<EmpItem active>
				<Button onClick={this.nextYear}>+++</Button>
				<Header>My name is {name}, surname - {surname}, age - {this.state.years}, position - {this.state.position}</Header>
				<a href={link}>My profile</a>
				<form>
					<span>Введите должность</span>
					<input type="text" onChange={(event) => this.commitInputChanges(event, 'some color')}/>
				</form>
			</EmpItem>
		)
	}
}

const Wrapper = styled.div`
	width: 600px;
	margin: 80px auto 0 auto;
`;

function App() {
  return (
    <Wrapper>
		<WhoAmI name="John" surname="Galt" link="facebook.com"/>
		<WhoAmI name="Hank" surname="Rearden" link="instagram.com"/>
    </Wrapper>
  );
}

export default App;