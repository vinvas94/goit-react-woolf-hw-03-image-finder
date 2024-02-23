import styled from 'styled-components';

const SearchbarHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  margin-top: 20px;
  border-radius: 4px;
  color: #fff;
  background-color: #3f51b5;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

const SearchForm = styled.form`
  display: flex;
  align-items: center;
`;

const SearchFormButton = styled.button`
  background-color: ${props => (props.disabled ? '#ccc' : '#4caf50')};
  color: ${props => (props.disabled ? '#666' : 'white')};
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  margin-left: 20px;
`;

const SearchFormInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 200px;
`;

export { SearchForm, SearchFormButton, SearchFormInput, SearchbarHeader };
