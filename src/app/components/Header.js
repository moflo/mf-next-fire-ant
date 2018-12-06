import * as React from 'react'
import Link from 'next/link'
import { Layout, Menu, Divider, Avatar, Modal, Table } from 'antd';
import styled from 'styled-components';
import firebaseConfig from '../credentials/client';


const { Header } = Layout;

const UserName = styled.span`
  margin-left: 8px;
`

const AvatarWithIcon = styled(Avatar)`
  .anticon {
    margin-right: 0 !important;
  }
`

export default class MFHeader extends React.Component {
  state = {
    visible: false,
    user: null,
    deploying: false,
    isMoblie: false
  }

headerMenuOnClick = (menuItem) => {
  const {history} = this.props;
  if(menuItem.key === 'logout') {
        history.push('/');
  } else if(menuItem.key === "overview") {
    this.setState({
      visible: true
    });
  }
}

hideOverview = () => {
  this.setState({
    visible: false,
  });
}


render() {
  const {visible, user, deploying, isMoblie} = this.state;

  const menuMode = isMoblie ? 'inline' : 'horizontal';
  
  const username = user ? user.displayName || user.email : 'loading...';

  const columns = [{
    title: 'Project ID',
    dataIndex: 'projectId',
    key: 'projectId',
  }, {
    title: 'Auth Domain',
    dataIndex: 'authDomain',
    key: 'authDomain',
  }, {
    title: 'Storage Bucket',
    dataIndex: 'storageBucket',
    key: 'storageBucket',
  }, {
    title: 'Database URL',
    dataIndex: 'databaseURL',
    key: 'databaseURL',
    render: ((text) => <a href={text} target="_blank" rel="noopener noreferrer">{text}</a>),
  }];


  return (
    <Header style={{ background: '#fff', padding: 0, paddingRight: 20, height: 80 }}>
        <Menu mode={menuMode} defaultSelectedKeys={['home']} id="nav" key="nav" onClick={this.headerMenuOnClick} >
            <Menu.Item key="home">
            <Link href='/'> HOME </Link>
            </Menu.Item>
            <Menu.Item key="about">
            <Link href='/about'> ABOUT </Link>
            </Menu.Item>
            <Menu.Item key="dashboard">
            <Link href='/dashboard'> DASHBOARD </Link>
            </Menu.Item>
            <Divider type="vertical" />
            <Menu.SubMenu title={<span>
              <AvatarWithIcon style={{color: '#f56a00', backgroundColor: '#fde3cf'}} icon="user" />
              <UserName>{username}</UserName>
              </span>}>
              <Menu.Item key="overview">Overview</Menu.Item>
              <Menu.Item key="logout">Log out</Menu.Item>
            </Menu.SubMenu>
          </Menu>
          <Modal
          width={"80%"}
          title="Overview Firebase"
          visible={this.state.visible}
          onCancel={this.hideOverview}
          footer={null}
        >
          <Table columns={columns} rowKey="uid" dataSource={[firebaseConfig]} pagination={false} />
        </Modal>
        </Header>
      )

    }

}