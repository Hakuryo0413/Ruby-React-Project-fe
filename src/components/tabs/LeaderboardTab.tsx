import React, { useEffect, useState } from "react";

import CustomProvider from "../shared/CustomProvider";
import { Avatar, Button, Card, Col, List, Row } from "antd";
import { StarOutlined } from "@ant-design/icons";
import { getLeaderBoard } from "@src/features/auth/DetailMe";
import { UserInterface } from "@src/types/UserInterface";

const LeaderboardTab: React.FC = () => {
  const [dataLeaderBoard, setDataLeaderBoard] = useState<UserInterface[]>([]);

  const fetchLeaderBoard = async () => {
    try {
      const data = await getLeaderBoard();
      setDataLeaderBoard(data.data);
    } catch (error) {
      console.error("Error fetching all news", error);
    }
  };

  useEffect(() => {
    fetchLeaderBoard();
  }, []);

  return (
    <CustomProvider>
      <List
        itemLayout="horizontal"
        dataSource={dataLeaderBoard}
        renderItem={(item, index) => (
          <List.Item
            className={`font-medium ${
              index % 2 === 0 ? "bg-gray-100" : "bg-transparent"
            }`}
          >
            {<p className="pr-2">{index + 1}</p>}
            <List.Item.Meta title={<p>{item.email}</p>} />
            <div className="text-black">
              <p>{item?.total_points.toString() || null}</p>
            </div>
            <StarOutlined />
          </List.Item>
        )}
      />
    </CustomProvider>
  );
};

export default LeaderboardTab;
