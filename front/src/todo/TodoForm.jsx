import React, { Component } from 'react';
import Grid from '../template/Grid';
import IconButton from '../template/IconButton';
import { bindActionCreators } from 'redux';
import { changeDescription, search, add, clear } from './TodoActions';
import { connect } from 'react-redux';

class TodoForm extends Component {
    constructor(props) {
        super(props)
        this.keyHandler = this.keyHandler.bind(this);
    }
    
    componentWillMount(){
        this.props.search();
    }
    
    keyHandler(e) {
        const {add, search, clear, description} = this.props;
        if (e.key === 'Enter') {
            e.shiftKey ? search() : add(description);
        } else if (e.key === 'Escape') {
            props.clear();
        }
    }
    
    render() {
        const {add, search, description} = this.props;
     
        
        return (
            <div role='form' className='todoForm'>
                <Grid cols='12 9 10'>
                    <input id='description' className='form-control'
                        onKeyUp={this.keyHandler}
                        placeholder='Adicionar uma tarefa'
                        onChange={this.props.changeDescription}
                        value={this.props.description} />
                </Grid>

                <Grid cols='12 3 2'>
                    <IconButton
                        style='primary'
                        icon='plus'
                        onClick={() => add(description)}>
                    </IconButton>
                    <IconButton
                        style='info'
                        icon='search'
                        onClick={() => search()}>
                    </IconButton>
                    <IconButton
                        style='default'
                        icon='close'
                        onClick={this.props.clear}>
                    </IconButton>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = state => ({ description: state.todo.description })

const mapDispatchToProps = dispatch =>
    bindActionCreators({ changeDescription, search, add, clear}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);

