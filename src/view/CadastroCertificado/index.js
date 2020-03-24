import React, { Component } from 'react'
import { connect } from 'react-redux'

import Autocomplete from '../../components/Autocomplete'
import Suggestions from '../../components/Suggestions'

class CadastroCertificado extends Component {
  state = {
    query: '',
    results: []
  }

  getInfo = async (logradouro) => {
    const response = await fetch(`http://geocoder.pbh.gov.br/geocoder/v1/address?logradouro=${this.state.query}`)
    const data = await response.json()
    console.log(data)
    if(data.endereco.length) {
      this.setState({
        results: data.endereco
      })
    } else {
      this.setState({
        results: []
      })
    }
  }

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    }, () => {
      if (this.state.query && this.state.query.length > 1) {
        this.getInfo()
      }
    })
  }

  render() {
    const { usuario } = this.props
    return <div className="">
      <h1>Preencha os dados</h1>
      <input
          placeholder="Search for..."
          ref={input => this.search = input}
          onChange={this.handleInputChange}
        />
        {this.state.results && <Suggestions results={this.state.results} />} 
      <Autocomplete
        suggestions={[
          "Alligator",
          "Bask",
          "Crocodilian",
          "Death Roll",
          "Eggs",
          "Jaws",
          "Reptile",
          "Solitary",
          "Tail",
          "Wetlands"
        ]}
      />
      {usuario &&
        <p>{usuario.name}</p>
      }
    </div>
  }
}

const mapStateToProps = store => ({
  usuario: store.cpfCnpjReducer.data
})

export default connect(mapStateToProps)(CadastroCertificado)