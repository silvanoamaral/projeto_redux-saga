import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchZipCode, fetchCpfCnpj } from '../../redux/actions'

class PreenchaDados extends Component {
  state = {
    values: '',
    loading: false,
    error: ''
  }

  componentDidMount() {
    console.log('componentDidMount - chamando fetchZipCode')
    this.props.fetchZipCode('06184020')
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const { values } = this.state

    if(values) {
      this.setState({ loading: true })
      this.props.fetchCpfCnpj(values)

      this.props.history.push('/formulario')
  
      setTimeout(() => {
        // Post da API
        this.setState({ loading: false })
      },1000)
    }
  }

  handleChange = (event) => {
    let values = event.target.value
    values = values.replace(/\D/g,"")
    this.setState({ values })
  }

  render() {
    const { loading } = this.state
    const { city, street } = this.props.zipcode

    return <div>
      <h2>Preencha com CPF ou CNPJ</h2>
      <form onSubmit={this.handleSubmit}>
        <input
          name="example"
          type="text"
          value={ this.state.values }
          onChange={ this.handleChange }
        />
        <button type="submit">{loading ? "Enviando..." : "Enviar"}</button>
      </form>
      {this.state.error}
      
      {this.props.zipcode && 
        <div className="adress">
          <p>Cidade: { city }</p>
          <p>Rua: { street }</p>
        </div>
      }
    </div>
  }
}

const mapStateToProps = store => ({
  zipcode: store.zipCodeInfoReducer.zipcode,
  cpf_cnpj: store.cpfCnpjReducer.data
})

const mapDispatchToProps = {
  fetchZipCode: fetchZipCode,
  fetchCpfCnpj: fetchCpfCnpj
}

export default connect(mapStateToProps, mapDispatchToProps)(PreenchaDados)
