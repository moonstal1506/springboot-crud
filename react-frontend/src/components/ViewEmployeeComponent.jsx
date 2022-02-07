import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'

class ViewEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            employee: {}
        }
    }

    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id).then( res => {
            this.setState({employee: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> 직원 상세</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label>이름: </label>
                            <div> { this.state.employee.name }</div>
                        </div>
                        <div className = "row">
                            <label>이메일: </label>
                            <div> { this.state.employee.emailId }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewEmployeeComponent
