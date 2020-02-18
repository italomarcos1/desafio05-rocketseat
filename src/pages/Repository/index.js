import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import api from '../../services/api';

import Container from '../../components/Container';
import { Loading, Owner, IssueList } from './styles';

export default class Repository extends Component {
  static propTypes = {
    // a propriedade match tem a propriedade params, que carrega os route params
    match: PropTypes.shape({
      params: PropTypes.shape({
        repository: PropTypes.string,
      }),
    }).isRequired,
  };

  state = {
    repository: {}, // eh um único repositório, então é um objeto
    issues: [],
    loading: true,
  };

  async componentDidMount() {
    const { match } = this.props; // match contém os route params

    const repoName = decodeURIComponent(match.params.repository);

    const [repository, issues] = await Promise.all([
      // executa as duas chamadas ao mesmo tempo
      api.get(`/repos/${repoName}`),
      api.get(`/repos/${repoName}/issues`, {
        params: {
          // query params, passados na url. filtra as issues
          state: 'open',
          per_page: 5,
        },
      }),
    ]);

    this.setState({
      // ao final do request, salva os valores retornados pelo axios no estado
      repository: repository.data,
      issues: issues.data,
      loading: false,
    });
  }

  render() {
    const { repository, issues, loading } = this.state;

    if (loading) {
      return <Loading>Carregando</Loading>;
    }

    return (
      <Container>
        <Owner>
          <Link to="/">Back</Link>
          <img src={repository.owner.avatar_url} alt={repository.owner.login} />
          <h1>{repository.name}</h1>
          <p>{repository.description}</p>
        </Owner>

        <IssueList>
          {issues.map(issue => (
            <li key={String(issue.id)}>
              {/** sempre é interessante colocar a key como uma string */}
              <img src={issue.user.avatar_url} alt={issue.user} />
              <div>
                <strong>
                  <a href={issue.html_url}>{issue.title}</a>
                  {issue.labels.map(label => (
                    <span key={String(label.id)}>{label.name}</span>
                  ))}
                </strong>
                <p>{issue.user.login}</p>
              </div>
            </li>
          ))}
        </IssueList>
      </Container>
    );
  }
}
