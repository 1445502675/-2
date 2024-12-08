// src/components/CustomerService/CustomerService.tsx
import React from 'react';
import { Button } from '@/components/ui/button';
import QuestionItem from './QuestionItem';

interface CustomerServiceProps {}

const questions = [
  {
    question: 'ChatGPT Plus订阅教程',
    answer: '账号相关：确保你已经拥有一个 OpenAI 账号，如果没有，需要先前往 OpenAI 官网（https://openai.com/ ）进行注册。注册过程中可能需要验证手机号等信息，按照提示逐步操作完成注册。注意部分地区可能在注册和订阅上存在限制，要确保所在地区支持相关服务。你需要准备一张有效的国际信用卡，比如 Visa、Mastercard 等。确保卡内有足够的余额用于支付订阅费用，并且该信用卡支持国际在线支付以及境外交易，有时候可能还需要提前联系银行开通相应的境外支付权限，避免支付失败。',
  },
  {
    question: 'ChatGPT升级出现[我们未能验证您的支付方式/we are unable to authenticate]怎么办?',
    answer: '检查支付卡信息：重新核对填写的信用卡卡号、有效期、安全码等信息是否准确无误，如有错误，及时修改并重新提交验证。',
  },
  {
    question: 'OpenAI API绑卡遇到[Declined]如何处理',
    answer: '查看信用卡是否在有效期内，若过期及时联系银行更换新卡。通过银行 APP 或者客服查询卡内余额情况，确保有足够的可用额度用于可能的验证费用等支出，如有不足及时充值。',
  },
  {
    question: 'Google Play绑卡教程',
    answer: '打开设备上的 Google Play 应用商店，点击左上角的菜单图标（通常是三条横线样式），找到并点击 “付款和订阅” 选项。在 “付款和订阅” 页面中，点击 “付款方式”，进入添加付款方式页面。',
  },
];

const CustomerService: React.FC<CustomerServiceProps> = () => {
  return (
    <div className="customer - service">
      <Button>野生卡</Button>
      <div className="question - list">
        {questions.map((q, index) => (
          <QuestionItem key={index} question={q.question} answer={q.answer} />
        ))}
      </div>
    </div>
  );
};

export default CustomerService;