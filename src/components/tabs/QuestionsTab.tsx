import React, { use, useEffect, useState } from "react";

import { dateFormater } from "@src/utils/common";
import CustomProvider from "../shared/CustomProvider";
import {
  Avatar,
  Button,
  Card,
  Col,
  Divider,
  List,
  Progress,
  Row,
  Space,
  Tag,
  Typography,
} from "antd";
import { QuestionInterface } from "@src/types/QuestionInterface";
import {
  getAllQuestions,
  getAllQuestionsOfChallenge,
} from "@src/features/questions/AllQuestions";
import CustomTag from "../shared/CustomTag";
import { useNavigate, useParams } from "react-router-dom";
import {
  DeleteOutlined,
  ExportOutlined,
  MessageOutlined,
  PlayCircleOutlined,
  ShareAltOutlined,
  StarOutlined,
} from "@ant-design/icons";
import {
  deleteQuestionFunc,
  getSpecificChallenge,
} from "@src/features/challenges/AllChallenges";
import { ChallengeInterface } from "@src/types/ChallengeInterface";

const QuestionsTab: React.FC = () => {
  const [dataQuestion, setDataQuestion] = useState<QuestionInterface[]>([]);
  const [dataChallenge, setDataChallenge] = useState<ChallengeInterface>();
  const navigate = useNavigate();
  const { id } = useParams();
  const { Title, Text } = Typography;
  const fetchQuestion = async (challenge_id: Number) => {
    try {
      const data = await getAllQuestionsOfChallenge(challenge_id);
      setDataQuestion(data);
    } catch (error) {
      console.error("Error fetching all news", error);
    }
  };

  const detailChallenge = async (challenge_id: Number) => {
    try {
      const data = await getSpecificChallenge(challenge_id);
      setDataChallenge(data.data);
    } catch (error) {
      console.error("Error fetching all news", error);
    }
  };

  const handleDelete = async (challenge_id: Number, quesiton_id: Number) => {
    try {
      const data = await deleteQuestionFunc(challenge_id, quesiton_id);
      alert("Deleted");
    } catch (error) {
      console.error("Error fetching all news", error);
    }
  };
  useEffect(() => {
    detailChallenge(Number(id));
    fetchQuestion(Number(id));
  }, []);

  useEffect(() => {
    fetchQuestion(Number(id));
  }, [handleDelete]);
  const total = 708;
  const solved = 17;
  const attempting = 0;

  const progressPercent = (solved / total) * 100;
  return (
    <CustomProvider>
      <Row gutter={16}>
        <Col span={6}>
          <Card
            style={{ borderRadius: 12 }}
            cover={
              <div
                style={{ padding: 24, display: "flex", alignItems: "center" }}
              >
                <img
                  src={dataChallenge?.image_url}
                  alt="challenge"
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: 12,
                    marginRight: 16,
                  }}
                />
                <div>
                  <Title level={3} style={{ margin: 0 }}>
                    {dataChallenge?.title}
                  </Title>
                  {/* <Text type="secondary">
                    LeetCode · 708 questions · 2462 Saved
                  </Text>
                  <div style={{ marginTop: 12 }}>
                    <Space>
                      <Button
                        type="primary"
                        icon={<PlayCircleOutlined />}
                        shape="round"
                      >
                        Practice
                      </Button>
                      <Button shape="circle" icon={<StarOutlined />} />
                      <Button shape="circle" icon={<ExportOutlined />} />
                      <Button shape="circle" icon={<ShareAltOutlined />} />
                    </Space>
                  </div> */}
                  <Text
                    type="secondary"
                    style={{ display: "block", marginTop: 8 }}
                  >
                    ⚡ Updated: an hour ago
                  </Text>
                </div>
              </div>
            }
          >
            <Divider orientation="left">Progress</Divider>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              {/* Circular progress
              <div style={{ textAlign: "center", flex: 1 }}>
                <Progress
                  type="dashboard"
                  percent={progressPercent}
                  format={() => (
                    <>
                      <Title level={3} style={{ margin: 0 }}>
                        {solved}
                      </Title>
                      <Text type="secondary">/{total} Solved</Text>
                      <div style={{ color: "gray", marginTop: 4 }}>
                        {attempting} Attempting
                      </div>
                    </>
                  )}
                  strokeColor="#52c41a"
                />
              </div> */}

              {/* Tags by level */}
              <div style={{ flex: 1 }}>
                <div style={{ marginBottom: 12 }}>
                  <Tag color="cyan">Easy</Tag> <Text>15 / 171</Text>
                </div>
                <div style={{ marginBottom: 12 }}>
                  <Tag color="gold">Med.</Tag> <Text>2 / 420</Text>
                </div>
                <div>
                  <Tag color="red">Hard</Tag> <Text>0 / 117</Text>
                </div>
              </div>
            </div>

            <Divider />
            <Button type="link" icon={<MessageOutlined />}>
              Discuss
            </Button>
          </Card>
        </Col>
        <Col span={18}>
          <Button
            type="primary"
            onClick={() => navigate(`/challenge/${id}/create`)}
          >
            Add Question
          </Button>

          <List
            itemLayout="horizontal"
            dataSource={dataQuestion}
            renderItem={(item, index) => (
              <List.Item className="font-medium">
                <p className="pr-2">{index + 1}</p>
                <List.Item.Meta
                  title={
                    <a href={`/question/${item.id}/codeeditor`}>{item.title}</a>
                  }
                />
                <div className="text-black">
                  {/* <CustomTag category={item?.level} /> */}
                </div>
                <StarOutlined />
                <DeleteOutlined
                  onClick={() => handleDelete(item.challenge_id, item.id)}
                />
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </CustomProvider>
  );
};

export default QuestionsTab;
