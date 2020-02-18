import React, { Component } from 'react';
import { FaGithubAlt, FaPlus, FaSpinner } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import Container from '../../components/Container';
import { Form, SubmitButton, Input, List } from './styles';

export default class Main extends Component {
  state = {
    newRepo: '',
    repositories: [],
    loading: false,
    double: false,
  };

  componentDidMount() {
    const repositories = localStorage.getItem('repositories');

    if (repositories) {
      this.setState({ repositories: JSON.parse(repositories) });
    }
  }

  componentDidUpdate(_, prevState) {
    const { repositories } = this.state;

    if (prevState.repositories !== repositories) {
      localStorage.setItem('repositories', JSON.stringify(repositories));
    }
  }

  handleInputChange = e => {
    this.setState({ newRepo: e.target.value });
  };

  handleSubmit = async e => {
    try {
      e.preventDefault();

      this.setState({ loading: true, double: false }); // após clicar no botão e antes de terminar a request, ativa o loading

      const { newRepo, repositories } = this.state; // pega o valor do input de dentro do estado

      const response = await api.get(`/repos/${newRepo}`);

      const data = {
        name: response.data.full_name, // desestrutura pra pegar só o full_name do repositorio
      };

      const itExists = !!repositories.find(repo => repo.name === data.name);
      if (itExists) {
        throw new Error('Repositorio duplicado');
      }

      this.setState({
        repositories: [...repositories, data], // salvando o nome do repositório
      });
    } catch (err) {
      this.setState({ double: true });
    } finally {
      this.setState({ newRepo: '', loading: false });
    }
  };

  render() {
    const { newRepo, double, loading, repositories } = this.state;
    return (
      <Container>
        <h1>
          <FaGithubAlt />
          Repos
        </h1>

        <Form onSubmit={this.handleSubmit}>
          <Input
            type="text"
            placeholder="Insira o nome do repositório..."
            value={newRepo}
            double={double}
            onChange={this.handleInputChange}
            /** o value do input recebe a variável do estado */
          />

          <SubmitButton
            loading={
              loading
            } /** quando passamos a prop, o styled-components recebe */
          >
            {loading ? ( // conditional rendering. if ternário pra selecionar o component baseado no valor do estado
              <FaSpinner color="#FFF" size={14} />
            ) : (
              <FaPlus color="#FFF" size={14} />
            )}
          </SubmitButton>
        </Form>
        <List>
          {repositories.map(repository => (
            <li key={repository.name}>
              <span>{repository.name}</span>
              <Link to={`/repository/${encodeURIComponent(repository.name)}`}>
                Detalhes
              </Link>
            </li>
          ))}
        </List>
      </Container>
    );
  }
}
