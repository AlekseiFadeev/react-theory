import React, {Component} from 'react';
import './App.scss';
import Car from './Car/Car'
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'
import Counter from "./Counter/Counter";

class App extends Component {

    constructor(props) {
        super(props)

        this.state = {
            cars: [
                {name: 'Ford', year: 2018},
                {name: 'Audi', year: 2016},
                {name: 'Mazda', year: 2010}
            ],
            pageTitle: 'React components',
            showCars: false
        }
    }

    toggleCarsHandler = () => {
        this.setState({
            showCars: !this.state.showCars
        })
    }

    onChangeName(name, index) {
        const car = this.state.cars[index]
        car.name = name
        const cars = [...this.state.cars]
        cars[index] = car
        this.setState({cars})
    }

    deleteHandler(index) {
        const cars = this.state.cars.concat()
        cars.splice(index, 1)
        this.setState({cars})
    }

    render() {

        let cars =  null

        if(this.state.showCars) {
            cars = this.state.cars.map((car, index) => {
                return (
                    <ErrorBoundary key={index}>
                        <Car
                            name={car.name}
                            year={car.year}
                            index={index}
                            onDelete={this.deleteHandler.bind(this, index)}
                            onChangeName={(event) => this.onChangeName(event.target.value, index)}
                        />
                    </ErrorBoundary>
                )
            })
        }

        return (
            <div className="App">
                {/*<h1>{this.state.pageTitle}</h1>*/}
                <h1>{this.props.title}</h1>

                <Counter />
                <hr/>
                <button
                    style={{marginTop: 20}}
                    onClick={this.toggleCarsHandler}
                >Toggle cars</button>

                <div style={{
                    width: 400,
                    margin: 'auto',
                    paddingTop: '10px'
                }}>
                    { cars }
                </div>
            </div>
        );
    }
}

export default App;
