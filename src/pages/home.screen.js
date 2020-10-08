import React from "react";
import { Text, View } from "react-native";
import { FloatingAction } from "react-native-floating-action";
import Icon from "react-native-vector-icons/FontAwesome";
import ProgressPills from "../components/ProgressPills";
import ArrearageData from "../db-fake/arrearage.json";
import {
  DebtContainer,
  DebtFooter,
  DebtFooterInstallment,
  DebtFooterValue,
  DebtHeader,
  DebtItem,
  DebtTitle,
  DebtValue,
  ListArrearage,
} from "../styles/HomeScreenUI";
import constants from "../util/constants";

const actions = [
  {
    text: "Registrar Dívida",
    icon: <Icon name="plus" color="#FFF" />,
    name: "bt_accessibility",
    position: 1,
  },
];

export default function Home() {
  return (
    <>
      <ListArrearage
        data={ArrearageData}
        renderItem={({ item }) => (
          <DebtItem>
            <DebtHeader>
              <DebtTitle>{item.name}</DebtTitle>
              <DebtValue>{item.total.toMoney()}</DebtValue>
            </DebtHeader>
            <DebtContainer>
              <ProgressPills
                value={
                  (item.paidInstallments.length * 100) / item.numberInstallments
                }
              />
            </DebtContainer>
            <DebtFooter>
              <DebtFooterInstallment>
                {item.paidInstallments.length} / {item.numberInstallments}
              </DebtFooterInstallment>
              <DebtFooterValue>
                {item.paidInstallments
                  .map((i) => i.value)
                  .reduce((p, c) => p + c, 0)
                  .toMoney()}{" "}
                / {item.total.toMoney()}
              </DebtFooterValue>
            </DebtFooter>
          </DebtItem>
        )}
      />
      <FloatingAction
        floatingIcon={
          <Icon name="bars" color="#FFF" size={constants.Sizes.Normal} />
        }
        actionsPaddingTopBottom={2}
        actions={actions}
        onPressItem={(name) => {
          console.log(`selected button: ${name}`);
        }}
      />
    </>
  );
}
