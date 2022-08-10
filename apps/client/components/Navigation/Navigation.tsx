import React from 'react';
import { Button, Group, Header, TextInput } from '@mantine/core';
import { FaSearch } from 'react-icons/fa';

function Navigation() {
  return (
    <>
      <Header height={60}>
        <Group sx={{ height: '100%' }} position="apart">
          <div></div>
          <div className="flex gap-x-2">
            <Button variant="default">Log In</Button>
            <Button type="button" variant="light">
              Sign Up
            </Button>
          </div>
        </Group>
      </Header>
      <Header height={60}>
        <Group sx={{ height: '100%' }} position="apart">
          <div className="flex gap-x-8">
            <div>TCL Logo</div>
            <div className="flex gap-x-4 font-bold">
              <div>Projects</div>
              <div>Products</div>
              <div>About Us</div>
            </div>
          </div>
          <div>
            <TextInput placeholder="Search" rightSection={<FaSearch />} />
          </div>
        </Group>
      </Header>
    </>
  );
}

export default Navigation;
