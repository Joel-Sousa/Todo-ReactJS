import React from 'react';
import IconButton from '../template/IconButton';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {markAsDone, markAsPending, remove} from './TodoActions';

const TodoList = props => {

    const estilo = {
        // border: '1px solid',
        borderBottom: '1px solid black',
        padding: '10px 0px 10px 0px ',
        // textAlign: 'center',

        centro: {
            textAlign: 'center',
        },
        esquerda: {
            borderBottom: '1px solid black',
            padding: '10px 0px 10px 0px ',
            textAlign: 'left'
        },
        direita: {
            padding: '10px 0px 10px 0px ',
            borderBottom: '1px solid black',
            textAlign: 'right'
        },
    }

    const renderRows = () => {
        const list = props.list || [];

        return list.map((e, i) => (
            <tr key={e._id} style={estilo}>
                {/* <td>&nbsp;{e._id}</td> */}
                <td style={estilo.esquerda} className={e.done ? 'markedAsDone' : ''}>&nbsp;{e.description}</td>
                <td style={estilo.direita}>
                        <IconButton
                            hide={e.done}
                            style='success'
                            icon='check'
                            onClick={() => props.markAsDone(e)}>
                        </IconButton>
                        <IconButton
                            hide={!e.done}
                            style='warning'
                            icon='undo'
                            onClick={() => props.markAsPending(e)}>
                        </IconButton>
                        <IconButton
                            hide={!e.done}
                            style='danger'
                            icon='trash-o'
                            onClick={() => props.remove(e)}>
                        </IconButton> &nbsp;
                </td>
            </tr>
        ))
    }

    return (
        <div>
            <br />
            <table width={'90%'}>
                <thead style={estilo}>
                    <tr>
                        {/* <th>Id</th> */}
                        <th style={estilo.esquerda}>Descricao</th>
                        <th style={estilo.direita}>Açoes</th>
                    </tr>
                </thead>
                <tbody style={estilo}>
                    {renderRows()}
                </tbody>
            </table>
        </div>
    )

}

const mapStateToProps = state =>({list: state.todo.list});
const mapDispatchToProps = (dispatch) => bindActionCreators({markAsDone, markAsPending, remove}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);