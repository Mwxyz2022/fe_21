import React, { Component } from 'react';
import Pagination from './Pagination';
import User from './User';

// state
// curPage: number

class UsersList extends Component {
    state = {
        curPage: 0,
    };

    prevPage = () => {
        this.setState({
            curPage: (this.state.curPage -= 1),
        });
    };

    nextPage = () => {
        this.setState({
            curPage: (this.state.curPage += 1),
        });
    };

    render() {
        const itemsPerPage = 3;
        const pageNumber = this.state.curPage + 1;
        const startIndex = (pageNumber - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const renderUsers = this.props.users.slice(startIndex, endIndex);

        return (
            <div>
                <Pagination
                    goPrev={this.prevPage}
                    goNext={this.nextPage}
                    totalItems={this.props.users.length}
                    currentPage={pageNumber}
                    itemsPerPage={itemsPerPage}
                />

                <ul className="users">
                    {renderUsers.map(user => (
                        <User {...user} key={user.name + user.age} />
                    ))}
                </ul>
            </div>
        );
    }
}

export default UsersList;
